import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Entity } from "../../entity/entity";
import { EntityMapperService } from "../../entity/entity-mapper.service";
import { ColumnDescription } from "./column-description";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { AlertService } from "app/core/alerts/alert.service";
import { FormValidationResult } from "./form-validation-result";
import { ConfirmationDialogService } from "../../confirmation-dialog/confirmation-dialog.service";
import { ColumnDescriptionInputType } from "./column-description-input-type.enum";
import { ComponentType } from "@angular/cdk/overlay";
import { FormDialogService } from "../../form-dialog/form-dialog.service";
import { ShowsEntity } from "../../form-dialog/shows-entity.interface";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

/**
 * Generically configurable component to display and edit a list of entities in a compact way
 * that can especially be used within another entity's details view to display related entities.
 *
 * For example, all Notes related to a certain Child are displayed within the Child's detail view
 * with the help of this component.
 *
 * A detailed Guide on how to use this component is available:
 * - [How to display related entities]{@link /additional-documentation/how-to-guides/display-related-entities.html}
 */
@UntilDestroy()
@Component({
  selector: "app-entity-subrecord",
  templateUrl: "./entity-subrecord.component.html",
  styleUrls: ["./entity-subrecord.component.scss"],
})
export class EntitySubrecordComponent implements OnInit, OnChanges {
  /** data to be displayed */
  @Input() records: Array<Entity>;

  /** configuration what kind of columns to be generated for the table */
  @Input() columns: Array<ColumnDescription>;

  /**
   * factory method to create a new instance of the displayed Entity type
   * used when the user adds a new entity to the list.
   */
  @Input() newRecordFactory: () => Entity;

  /**
   * A Component to be used to display a detailed view or form of a single instance of the displayed entities.
   * This is displayed as a modal (hovering) dialog above the active view and allows the user to get
   * more information or more comfortable editing of a single record.
   */
  @Input() detailsComponent: ComponentType<ShowsEntity>;

  /**
   * Whether an "Add" button to create a new entry should be displayed as part of the form.
   * Default is "true".
   */
  @Input() showAddButton = true;

  /**
   * Optional function implementing form validation logic that takes an entity instance, checks it and returns
   * a {@link FormValidationResult} that is then handled by the EntitySubrecordComponent.
   */
  @Input() formValidation?: (record: Entity) => FormValidationResult;

  /**
   * Event whenever an entity in this table is changed.
   */
  @Output() changedRecordsInEntitySubrecordEvent = new EventEmitter<any>();

  /** id of the parent entity of the records being displayed. May be used for custom display logic. */
  @Input() entityId?: string;

  /** function returns the background color for each entry*/
  @Input() getBackgroundColor?: (rec: Entity) => string;

  /** data displayed in the template's table */
  recordsDataSource = new MatTableDataSource();
  /** columns displayed in the template's table */
  columnsToDisplay = [];

  /** map of entities' ids and whether this record's table row is currently in edit mode */
  recordsEditing = new Map<string, boolean>();
  /** backup copies of the original state of records to allow reset */
  private originalRecords = [];

  private screenWidth = "";

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _entityMapper: EntityMapperService,
    private _snackBar: MatSnackBar,
    private _confirmationDialog: ConfirmationDialogService,
    private formDialog: FormDialogService,
    private alertService: AlertService,
    private media: MediaObserver
  ) {
    this.media.media$
      .pipe(untilDestroyed(this))
      .subscribe((change: MediaChange) => {
        if (change.mqAlias !== this.screenWidth) {
          this.screenWidth = change.mqAlias;
          this.setupTable();
        }
      });
  }

  ngOnInit() {
    this.recordsDataSource.sort = this.sort;
  }

  /**
   * Update the component if any of the @Input properties were changed from outside.
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes["records"] && this.records !== undefined) {
      this.recordsDataSource.data = this.records;

      this.records.forEach((e) =>
        this.originalRecords.push(Object.assign({}, e))
      );
    }
    if (changes["columns"]) {
      this.columnsToDisplay = this.columns.map((e) => e.name);
      this.columnsToDisplay.push("actions");
      this.setupTable();
    }
  }

  /**
   * Save an edited record to the database (if validation succeeds).
   * @param record The entity to be saved.
   */
  save(record: Entity) {
    if (this.formValidation) {
      const formValidationResult = this.formValidation(record);
      if (!formValidationResult.hasPassedValidation) {
        this.alertService.addWarning(formValidationResult.validationMessage);
        return;
      }
    }

    this._entityMapper.save(record).then(() => {
      this.changedRecordsInEntitySubrecordEvent.emit();
    });

    // updated backup copies used for reset
    const i = this.originalRecords.findIndex(
      (e) => e.entityId === record.getId()
    );
    this.originalRecords[i] = Object.assign({}, record);

    this.recordsEditing.set(record.getId(), false);
  }

  /**
   * Discard any changes to the given entity and reset it to the state before the user started editing.
   * @param record The entity to be reset.
   */
  resetChanges(record: Entity) {
    // reload original record from database
    const index = this.records.findIndex((a) => a.getId() === record.getId());
    if (index > -1) {
      const originalRecord = this.originalRecords.find(
        (e) => e.entityId === record.getId()
      );
      Object.assign(record, originalRecord);
      this.records[index] = record;
      this.recordsDataSource.data = this.records;
    }

    this.recordsEditing.set(record.getId(), false);
  }

  private removeFromDataTable(record: Entity) {
    const index = this.records.findIndex((a) => a.getId() === record.getId());
    if (index > -1) {
      this.records.splice(index, 1);
      this.recordsDataSource.data = this.records;
    }
  }

  /**
   * Delete the given entity from the database (after explicit user confirmation).
   * @param record The entity to be deleted.
   */
  delete(record: Entity) {
    const dialogRef = this._confirmationDialog.openDialog(
      "Delete?",
      "Are you sure you want to delete this record?"
    );

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this._entityMapper.remove(record).then(() => {
          this.changedRecordsInEntitySubrecordEvent.emit();
        });
        this.removeFromDataTable(record);

        const snackBarRef = this._snackBar.open("Record deleted", "Undo", {
          duration: 8000,
        });
        snackBarRef.onAction().subscribe(() => {
          this._entityMapper.save(record, true);
          this.records.unshift(record);
          this.recordsDataSource.data = this.records;
        });
      }
    });
  }

  /**
   * Create a new entity.
   * The entity is only written to the database when the user saves this record which is newly added in edit mode.
   */
  create() {
    const newRecord = this.newRecordFactory();

    this.records.unshift(newRecord);
    this.originalRecords.unshift(Object.assign({}, newRecord));
    this.recordsDataSource.data = this.records;

    if (this.detailsComponent === undefined) {
      // edit inline in table
      this.recordsEditing.set(newRecord.getId(), true);
    } else {
      // open in modal for comfortable editing
      this.showRecord(newRecord);
    }
  }

  /**
   * Show one record's details in a modal dialog (if configured).
   * @param record The entity whose details should be displayed.
   */
  showRecord(record: Entity) {
    if (
      this.detailsComponent === undefined ||
      this.recordsEditing.get(record.getId())
    ) {
      return;
    }
    this.formDialog.openDialog(this.detailsComponent, record);
  }

  autocompleteSearch(col, input) {
    if (col.allSelectValues === undefined) {
      col.allSelectValues = col.selectValues;
    }
    col.selectValues = col.allSelectValues.filter(
      (v) => v.value.includes(input) || v.label.includes(input)
    );
  }

  /**
   * resets columnsToDisplay depending on current screensize
   */
  setupTable() {
    if (this.columns !== undefined && this.screenWidth !== "") {
      const columnsHelpArray = [];
      const entitySubrecordComponent = this;
      this.columns.forEach(function (this, col) {
        if (entitySubrecordComponent.isVisible(col)) {
          columnsHelpArray.push(col.name);
        }
      });
      this.columnsToDisplay = columnsHelpArray;
      if (this.screenWidth !== "xs") {
        this.columnsToDisplay.push("actions");
      }
    }
  }

  /**
   * isVisible
   * compares the current screensize to the columns' property visibleFrom. screensize < visibleFrom? column not displayed
   * @param col column that is checked
   * @return returns true if column is visible
   */
  isVisible(col) {
    let returnVal;
    switch (col.visibleFrom) {
      case "xl": {
        returnVal = this.screenWidth.match("xl");
        break;
      }
      case "lg": {
        returnVal = this.screenWidth.match("(lg|xl)");
        break;
      }
      case "md": {
        returnVal = this.screenWidth.match("(md|lg|xl)");
        break;
      }
      case "sm": {
        returnVal = this.screenWidth.match("(sm|md|lg|xl)");
        break;
      }
      default: {
        returnVal = true;
      }
    }
    return returnVal;
  }

  /**
   * Checks whether the given column configuration's input type is readonly
   * and therefore not changing its template in edit mode.
   * @param inputType The input type to be checked.
   */
  isReadonlyInputType(inputType: ColumnDescriptionInputType): boolean {
    return (
      inputType === ColumnDescriptionInputType.FUNCTION ||
      inputType === ColumnDescriptionInputType.READONLY
    );
  }
}
