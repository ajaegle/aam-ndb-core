import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChildrenListComponent } from "./children-list.component";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { ChildrenService } from "../children.service";
import { EntityMapperService } from "../../../core/entity/entity-mapper.service";
import { MockDatabase } from "../../../core/database/mock-database";
import { Database } from "../../../core/database/database";
import { RouterTestingModule } from "@angular/router/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AttendanceBlockComponent } from "../../attendance/attendance-block/attendance-block.component";
import { FormsModule } from "@angular/forms";
import { ChildBlockComponent } from "../child-block/child-block.component";
import { SchoolBlockComponent } from "../../schools/school-block/school-block.component";
import { FilterPipeModule } from "ngx-filter-pipe";
import { AttendanceDaysComponent } from "../../attendance/attendance-days/attendance-days.component";
import { EntitySubrecordModule } from "../../../core/entity-subrecord/entity-subrecord.module";
import { AttendanceDayBlockComponent } from "../../attendance/attendance-days/attendance-day-block.component";
import { EntitySchemaService } from "../../../core/entity/schema/entity-schema.service";
import { ExportDataComponent } from "../../../core/admin/export-data/export-data.component";
import { ChildPhotoService } from "../child-photo-service/child-photo.service";
import { SessionService } from "../../../core/session/session-service/session.service";
import { MatPaginatorModule } from "@angular/material/paginator";
import { User } from "app/core/user/user";
import { of } from "rxjs";

describe("ChildrenListComponent", () => {
  let component: ChildrenListComponent;
  let fixture: ComponentFixture<ChildrenListComponent>;
  const mockedRoute = {
    data: of({ icon: "child" }),
  };

  beforeEach(async(() => {
    const mockSessionService = jasmine.createSpyObj(["getCurrentUser"]);
    mockSessionService.getCurrentUser.and.returnValue(new User("test1"));
    TestBed.configureTestingModule({
      declarations: [
        ChildBlockComponent,
        SchoolBlockComponent,
        AttendanceBlockComponent,
        ChildrenListComponent,
        AttendanceDaysComponent,
        AttendanceDayBlockComponent,
        ExportDataComponent,
      ],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([]),
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatExpansionModule,
        MatTableModule,
        MatSortModule,
        MatSidenavModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTooltipModule,
        MatPaginatorModule,
        NoopAnimationsModule,
        FormsModule,
        FilterPipeModule,
        RouterTestingModule.withRoutes([
          { path: "child", component: ChildrenListComponent },
        ]),
        EntitySubrecordModule,
      ],
      providers: [
        ChildrenService,
        EntityMapperService,
        EntitySchemaService,
        {
          provide: SessionService,
          useValue: mockSessionService,
        },
        { provide: Database, useClass: MockDatabase },
        {
          provide: ChildPhotoService,
          useValue: jasmine.createSpyObj(["getImage"]),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
