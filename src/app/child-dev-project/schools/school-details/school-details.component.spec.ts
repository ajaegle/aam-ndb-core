import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SchoolDetailsComponent } from "./school-details.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from "@angular/material/expansion";
import { SchoolsService } from "../schools.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { EntityMapperService } from "../../../core/entity/entity-mapper.service";
import { AlertService } from "../../../core/alerts/alert.service";
import { ConfirmationDialogService } from "../../../core/confirmation-dialog/confirmation-dialog.service";
import { Database } from "../../../core/database/database";
import { MockDatabase } from "../../../core/database/mock-database";
import { Location } from "@angular/common";
import { Observable, of } from "rxjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EntitySchemaService } from "../../../core/entity/schema/entity-schema.service"; //  Necessary for usage of uniqid in the component
import { ChildrenService } from "app/child-dev-project/children/children.service";
import { CloudFileService } from "../../../core/webdav/cloud-file-service.service";
import { RouterTestingModule } from "@angular/router/testing";

describe("SchoolDetailComponent", () => {
  let component: SchoolDetailsComponent;
  let fixture: ComponentFixture<SchoolDetailsComponent>;
  const mockedRoute = {
    paramMap: of({ get: () => "new" }),
    data: of({ icon: "university" }),
  };
  const mockedRouter = { navigate: () => null };
  const mockedLocation = { back: () => null };
  const mockedSnackBar = {
    open: () => {
      return {
        onAction: () => Observable.create((observer) => observer.next()),
      };
    },
  };
  const mockedConfirmationDialog = {
    openDialog: () => {
      return {
        afterClosed: () => Observable.create((observer) => observer(false)),
      };
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolDetailsComponent],
      imports: [
        MatTableModule,
        MatFormFieldModule,
        MatSortModule,
        MatExpansionModule,
        MatIconModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatInputModule,
      ],
      providers: [
        EntityMapperService,
        EntitySchemaService,
        SchoolsService,
        AlertService,
        FormBuilder,
        ChildrenService,
        {
          provide: ConfirmationDialogService,
          useValue: mockedConfirmationDialog,
        },
        { provide: MatSnackBar, useValue: mockedSnackBar },
        { provide: Location, useValue: mockedLocation },
        { provide: Router, useValue: mockedRouter },
        { provide: ActivatedRoute, useValue: mockedRoute },
        { provide: Database, useClass: MockDatabase },
        {
          provide: CloudFileService,
          useValue: jasmine.createSpyObj(["getImage"]),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
