/*
 *     This file is part of ndb-core.
 *
 *     ndb-core is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     ndb-core is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with ndb-core.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Component, Inject, OnInit } from "@angular/core";
import { Child } from "../model/child";
import { EntityMapperService } from "../../../core/entity/entity-mapper.service";
import { Gender } from "../model/Gender";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Location } from "@angular/common";
import { ConfirmationDialogService } from "../../../core/confirmation-dialog/confirmation-dialog.service";
import * as uniqid from "uniqid";
import { AlertService } from "../../../core/alerts/alert.service";
import { ChildrenService } from "../children.service";
import { ChildPhotoService } from "../child-photo-service/child-photo.service";
import { SessionService } from "../../../core/session/session-service/session.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: "app-child-details",
  templateUrl: "./child-details.component.html",
  styleUrls: ["./child-details.component.scss"],
})
export class ChildDetailsComponent implements OnInit {
  child: Child = new Child("");

  classNamesWithIcon: String;

  validateForm = false;
  form: FormGroup;
  creatingNew = false;
  editing = false;
  enablePhotoUpload;
  gender = Gender;

  genders = Gender;
  documentStatus = [
    "OK (copy with us)",
    "OK (copy needed for us)",
    "needs correction",
    "applied",
    "doesn't have",
    "not eligible",
    "",
  ];

  isAdminUser: boolean;

  constructor(
    private entityMapperService: EntityMapperService,
    private childrenService: ChildrenService,
    @Inject(FormBuilder) public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar,
    private confirmationDialog: ConfirmationDialogService,
    private alertService: AlertService,
    private childPhotoService: ChildPhotoService,
    private sessionService: SessionService
  ) {
    this.route.paramMap.subscribe((params) => this.loadChild(params.get("id")));
    this.isAdminUser = this.sessionService.getCurrentUser().admin;
  }

  initForm() {
    this.form = this.fb.group({
      name: [
        { value: this.child.name, disabled: !this.editing },
        Validators.required,
      ],
      // gender:         [{value: this.child.gender}], // reactive forms seem broken for mat-select, using ngModel instead
      projectNumber: [
        { value: this.child.projectNumber, disabled: !this.editing },
      ],
      dateOfBirth: [{ value: this.child.dateOfBirth, disabled: !this.editing }],
      motherTongue: [
        { value: this.child.motherTongue, disabled: !this.editing },
      ],
      religion: [{ value: this.child.religion, disabled: !this.editing }],

      center: [
        { value: this.child.center, disabled: !this.editing },
        Validators.required,
      ],
      status: [{ value: this.child.status, disabled: !this.editing }],
      admissionDate: [
        { value: this.child.admissionDate, disabled: !this.editing },
      ],

      address: [{ value: this.child.address, disabled: !this.editing }],
      phone: [{ value: this.child.phone, disabled: !this.editing }],
      guardianName: [
        { value: this.child.guardianName, disabled: !this.editing },
      ],
      preferredTimeForGuardianMeeting: [
        {
          value: this.child.preferredTimeForGuardianMeeting,
          disabled: !this.editing,
        },
      ],

      // aadhar:         [{value: this.child.has_aadhar,         disabled: !this.editing}],
      // kanyashree:     [{value: this.child.has_kanyashree,     disabled: !this.editing}],
      // bankAccount:    [{value: this.child.has_bankAccount,    disabled: !this.editing}],
      // rationCard:     [{value: this.child.has_rationCard,     disabled: !this.editing}],
      // bplCard:        [{value: this.child.has_BplCard,        disabled: !this.editing}],

      photoFile: [{ value: this.child.photoFile, disabled: !this.editing }],
    });
  }

  ngOnInit() {
    this.route.data.subscribe((config) => {
      this.classNamesWithIcon = "fa fa-" + config.icon + " fa-fw";
    });
  }

  loadChild(id: string) {
    if (id === "new") {
      this.creatingNew = true;
      this.editing = true;
      this.child = new Child(uniqid());
    } else {
      this.childrenService
        .getChild(id)
        .pipe(untilDestroyed(this))
        .subscribe((child) => {
          this.child = child;
          this.initForm();
        });
    }
    this.initForm();
  }

  switchEdit() {
    this.editing = !this.editing;
    this.enablePhotoUpload = this.childPhotoService.canSetImage();
    this.initForm();
  }

  save() {
    // errors regarding invalid fields wont be displayed unless marked as touched
    this.form.markAllAsTouched();
    this.validateForm = true;

    if (this.form.valid) {
      this.assignFormValuesToChild(this.child, this.form);

      this.entityMapperService
        .save<Child>(this.child)
        .then(() => {
          if (this.creatingNew) {
            this.router.navigate(["/child", this.child.getId()]);
            this.creatingNew = false;
          }
          this.alertService.addInfo("Saving Successful");
          this.switchEdit();
        })
        .catch((err) =>
          this.alertService.addDanger(
            'Could not save Child "' + this.child.name + '": ' + err
          )
        );
    } else {
      const invalidFields = this.getInvalidFields(this.form);
      this.alertService.addDanger(
        "Form invalid, required fields (" + invalidFields + ") missing"
      );
    }
  }

  private assignFormValuesToChild(child: Child, form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      const value = form.get(key).value;
      if (value !== null) {
        child[key] = value;
      }
    });
  }

  removeChild() {
    const dialogRef = this.confirmationDialog.openDialog(
      "Delete?",
      "Are you sure you want to delete this Child?"
    );

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.entityMapperService
          .remove<Child>(this.child)
          .then(() => this.router.navigate(["/child"]));

        const snackBarRef = this.snackBar.open(
          'Deleted Child "' + this.child.name + '"',
          "Undo",
          { duration: 8000 }
        );
        snackBarRef.onAction().subscribe(() => {
          this.entityMapperService.save(this.child, true);
          this.router.navigate(["/child", this.child.getId()]);
        });
      }
    });
  }

  navigateBack() {
    this.location.back();
  }

  getInvalidFields(form: FormGroup) {
    const invalid = [];
    const controls = this.form.controls;
    for (const field in controls) {
      if (controls[field].invalid) {
        invalid.push(field);
      }
    }
    return invalid;
  }

  /**
   * hands over the selected file to the cloudFileService together with the childId
   * @param event The event of the file upload dialog
   */
  async uploadChildPhoto(event) {
    await this.childPhotoService.setImage(
      event.target.files[0],
      this.child.entityId
    );
    this.child.photo.next(await this.childPhotoService.getImage(this.child));
  }
}
