import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HealthFormComponent } from "./health-form.component";
import { EntityMapperService } from "../../../../core/entity/entity-mapper.service";
import { Database } from "../../../../core/database/database";
import { MockDatabase } from "../../../../core/database/mock-database";
import { EntitySchemaService } from "../../../../core/entity/schema/entity-schema.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { Child } from "../../model/child";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatSelect, MatSelectModule } from "@angular/material/select";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

describe("HealthFormComponent", () => {
  let component: HealthFormComponent;
  let fixture: ComponentFixture<HealthFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HealthFormComponent],
      imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        NoopAnimationsModule,
        FormsModule,
      ],
      providers: [
        EntityMapperService,
        EntitySchemaService,
        { provide: Database, useClass: MockDatabase },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthFormComponent);
    component = fixture.componentInstance;
    component.child = new Child("1");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
