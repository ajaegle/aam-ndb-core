import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { School } from "../model/school";
import { SchoolsService } from "../schools.service";
import { EntityMapperService } from "../../../core/entity/entity-mapper.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import * as uniqid from "uniqid";
import { AlertService } from "../../../core/alerts/alert.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { ConfirmationDialogService } from "../../../core/confirmation-dialog/confirmation-dialog.service";
import { Location } from "@angular/common";
import { Child } from "../../children/model/child";
@Component({
  selector: "app-school-details",
  templateUrl: "./school-details.component.html",
  styleUrls: ["./school-details.component.scss"],
})
export class SchoolDetailsComponent implements OnInit {
  school = new School("");

  classNamesWithIcon: String;

  studentDataSource: MatTableDataSource<Child> = new MatTableDataSource();
  displayedColumns = ["id", "name", "schoolClass", "age"];

  form: FormGroup;
  creatingNew = false;
  editing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    @Inject(FormBuilder) public fb: FormBuilder,
    private entityMapperService: EntityMapperService,
    private alertService: AlertService,
    private snackBar: MatSnackBar,
    private confirmationDialog: ConfirmationDialogService,
    private schoolService: SchoolsService
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      name: [{ value: this.school.name, disabled: !this.editing }],
      address: [{ value: this.school.address, disabled: !this.editing }],
      phone: [{ value: this.school.phone, disabled: !this.editing }],
      medium: [{ value: this.school.medium, disabled: !this.editing }],
      timing: [{ value: this.school.timing, disabled: !this.editing }],
      upToClass: [{ value: this.school.upToClass, disabled: !this.editing }],
      remarks: [{ value: this.school.remarks, disabled: !this.editing }],
      academicBoard: [
        { value: this.school.academicBoard, disabled: !this.editing },
      ],
      workingDays: [
        { value: this.school.workingDays, disabled: !this.editing },
      ],
      website: [{ value: this.school.website, disabled: !this.editing }],
      privateSchool: [
        { value: this.school.privateSchool, disabled: !this.editing },
      ],
    });
  }

  ngOnInit() {
    this.route.data.subscribe((config) => {
      this.classNamesWithIcon = "fa fa-" + config.icon + " fa-fw";
    });
    this.route.paramMap.subscribe((paramMap) => {
      this.loadSchool(paramMap.get("id"));
    });
  }

  switchEdit() {
    this.editing = !this.editing;
    this.initializeForm();
  }

  async loadSchool(id: string) {
    if (id === "new") {
      this.creatingNew = true;
      this.editing = true;
      this.school = new School(uniqid());
    } else {
      this.studentDataSource.data = [];
      this.school = await this.entityMapperService.load<School>(School, id);
    }
    this.initializeForm();
    await this.loadStudents();
  }

  async loadStudents() {
    this.studentDataSource.data = await this.schoolService.getChildrenForSchool(
      this.school.getId()
    );
  }

  removeSchool() {
    const dialogRef = this.confirmationDialog.openDialog(
      "Delete?",
      "Are you sure you want to delete this School?"
    );

    dialogRef.afterClosed().subscribe(async (confirmed) => {
      if (confirmed) {
        await this.entityMapperService.remove<School>(this.school);

        await this.router.navigate(["/school"]);

        const snackBarRef = this.snackBar.open(
          'Deleted School "' + this.school.name + '"',
          "Undo",
          { duration: 8000 }
        );
        snackBarRef.onAction().subscribe(() => {
          this.entityMapperService.save(this.school, true);
          this.router.navigate(["/school", this.school.getId()]);
        });
      }
    });
  }

  saveSchool() {
    this.assignFormValuesToSchool(this.school, this.form);

    this.entityMapperService
      .save<School>(this.school)
      .then(() => {
        if (this.creatingNew) {
          this.router.navigate(["/school", this.school.getId()]);
          this.creatingNew = false;
        }
        this.switchEdit();
      })
      .catch((err) =>
        this.alertService.addDanger(
          'Could not save School "' + this.school.name + '": ' + err
        )
      );
  }

  private assignFormValuesToSchool(school: School, form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      school[key] = form.get(key).value;
    });
  }

  navigateBack() {
    this.location.back();
  }
}
