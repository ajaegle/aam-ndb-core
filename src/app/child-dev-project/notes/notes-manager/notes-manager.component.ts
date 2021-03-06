import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Note } from "../model/note";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { NoteDetailsComponent } from "../note-details/note-details.component";
import { ActivatedRoute } from "@angular/router";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { WarningLevel, WarningLevelColor } from "../../warning-level";
import { EntityMapperService } from "../../../core/entity/entity-mapper.service";
import { FilterSelection } from "../../../core/filter/filter-selection/filter-selection";
import { SessionService } from "../../../core/session/session-service/session.service";
import { FormDialogService } from "../../../core/form-dialog/form-dialog.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { User } from "app/core/user/user";
import { InteractionType } from "../note-config-loader/note-config.interface";
import { NoteConfigLoaderService } from "../note-config-loader/note-config-loader.service";

@UntilDestroy()
@Component({
  selector: "app-notes-manager",
  templateUrl: "./notes-manager.component.html",
  styleUrls: ["./notes-manager.component.scss"],
})
export class NotesManagerComponent implements OnInit, AfterViewInit {
  /** interaction types loaded from config file */
  interactionTypes: InteractionType[];
  entityList = new Array<Note>();
  notesDataSource = new MatTableDataSource();
  listName: String;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnsToDisplay = ["date", "subject", "category", "author", "children"];

  columnGroups = {
    standard: ["date", "subject", "category", "author", "children"],
    mobile: ["date", "subject", "children"],
  };

  filterString = "";

  followUpFS = new FilterSelection<Note>("status", [
    {
      key: "urgent",
      label: "Urgent",
      filterFun: (n: Note) => n.warningLevel === WarningLevel.URGENT,
    },
    {
      key: "follow-up",
      label: "Needs Follow-Up",
      filterFun: (n: Note) =>
        n.warningLevel === WarningLevel.WARNING ||
        n.warningLevel === WarningLevel.URGENT,
    },
    { key: "", label: "All", filterFun: () => true },
  ]);

  dateFS = new FilterSelection<Note>("date", [
    {
      key: "current-week",
      label: "This Week",
      filterFun: (n: Note) => n.date > this.getPreviousSunday(0),
    },
    {
      key: "last-week",
      label: "Since Last Week",
      filterFun: (n: Note) => n.date > this.getPreviousSunday(1),
    },
    { key: "", label: "All", filterFun: () => true },
  ]);

  filterSelections = [this.followUpFS, this.dateFS];

  categoryFS = new FilterSelection<Note>("category", []);
  filterSelectionsDropdown = [this.categoryFS];

  public paginatorPageSize: number;
  public paginatorPageIndex: number;
  private user: User;

  constructor(
    private formDialog: FormDialogService,
    private sessionService: SessionService,
    private media: MediaObserver,
    private entityMapperService: EntityMapperService,
    private configLoader: NoteConfigLoaderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // load interactionTypes from config
    this.interactionTypes = this.configLoader.interactionTypes;

    // load listName from config
    this.route.data.subscribe((config) => {
      this.listName = config.title;
    });

    this.user = this.sessionService.getCurrentUser();
    this.paginatorPageSize = this.user.paginatorSettingsPageSize.notesList;
    this.paginatorPageIndex = this.user.paginatorSettingsPageIndex.notesList;

    // activate default filter to current week
    this.dateFS.selectedOption = this.dateFS.options[0].key;

    this.entityMapperService.loadType<Note>(Note).then((notes) => {
      this.sortAndAdd(notes);
    });

    this.displayColumnGroup("standard");
    this.media.media$
      .pipe(untilDestroyed(this))
      .subscribe((change: MediaChange) => {
        if (change.mqAlias === "xs" || change.mqAlias === "sm") {
          console.log("smaller screen toggled");
          this.displayColumnGroup("mobile");
        }
      });

    this.initCategoryFilter();
  }

  onPaginateChange(event: PageEvent) {
    this.paginatorPageSize = event.pageSize;
    this.paginatorPageIndex = event.pageIndex;
    this.updateUserPaginationSettings();
  }

  private updateUserPaginationSettings() {
    const hasChangesToBeSaved =
      this.paginatorPageSize !== this.user.paginatorSettingsPageSize.notesList;

    this.user.paginatorSettingsPageIndex.notesList = this.paginatorPageIndex;
    this.user.paginatorSettingsPageSize.notesList = this.paginatorPageSize;

    if (hasChangesToBeSaved) {
      this.entityMapperService.save<User>(this.user);
    }
  }

  private sortAndAdd(newNotes: Note[]) {
    newNotes.forEach((newNote) => {
      this.entityList.push(newNote);
    });
    this.entityList.sort(
      (a, b) =>
        (b.date ? b.date.getTime() : 0) - (a.date ? a.date.getTime() : 0)
    );
    this.applyFilterSelections();
  }

  displayColumnGroup(columnGroup: string) {
    this.columnsToDisplay = this.columnGroups[columnGroup];
  }

  private initCategoryFilter() {
    this.categoryFS.options = [
      { key: "show-all", label: "All Notes", filterFun: () => true },
    ];

    for (const interaction of this.interactionTypes) {
      this.categoryFS.options.push({
        key: interaction.name,
        label: interaction.name,
        filterFun: (note: Note) => {
          return note.category.name === interaction.name;
        },
      });
    }
    // set default to show-all
    this.categoryFS.selectedOption = this.categoryFS.options[0].key;

    this.applyFilterSelections();
  }

  ngAfterViewInit() {
    this.notesDataSource.sort = this.sort;
    this.notesDataSource.paginator = this.paginator;
    setTimeout(() => {
      this.paginator.pageIndex = this.paginatorPageIndex;
      this.paginator.page.next({
        pageIndex: this.paginator.pageIndex,
        pageSize: this.paginator.pageSize,
        length: this.paginator.length,
      });
    });
  }

  private getPreviousSunday(weeksBack: number) {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day - 7 * weeksBack; // adjust when day is sunday
    return new Date(today.setDate(diff));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.notesDataSource.filter = filterValue;
  }

  applyFilterSelections() {
    let filteredData = this.entityList;

    this.filterSelections.forEach((f) => {
      filteredData = filteredData.filter(f.getSelectedFilterFunction());
    });
    this.filterSelectionsDropdown.forEach((f) => {
      filteredData = filteredData.filter(f.getSelectedFilterFunction());
    });

    this.notesDataSource.data = filteredData;
  }

  addNoteClick() {
    const newNote = new Note(Date.now().toString());
    newNote.date = new Date();
    newNote.author = this.sessionService.getCurrentUser().name;

    const noteDialogRef = this.showDetails(newNote);
    noteDialogRef.afterClosed().subscribe((val) => {
      this.entityList = [val].concat(this.entityList);
      this.applyFilterSelections();
    });
  }

  showDetails(entity: Note) {
    return this.formDialog.openDialog(NoteDetailsComponent, entity);
  }

  public getColor(entity: Note): string {
    if (entity.warningLevel === WarningLevel.URGENT) {
      return WarningLevelColor(WarningLevel.URGENT);
    }
    if (entity.warningLevel === WarningLevel.WARNING) {
      return WarningLevelColor(WarningLevel.WARNING);
    }

    const color = entity.category.color;
    return color ? color : "";
  }
}
