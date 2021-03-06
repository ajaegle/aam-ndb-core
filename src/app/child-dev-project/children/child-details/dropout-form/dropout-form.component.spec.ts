import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DropoutFormComponent } from "./dropout-form.component";
import { EntityMapperService } from "../../../../core/entity/entity-mapper.service";
import { Database } from "../../../../core/database/database";
import { MockDatabase } from "../../../../core/database/mock-database";
import { EntitySchemaService } from "../../../../core/entity/schema/entity-schema.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { Child } from "../../model/child";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

describe("DropoutFormComponent", () => {
  let component: DropoutFormComponent;
  let fixture: ComponentFixture<DropoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropoutFormComponent],
      imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
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
    fixture = TestBed.createComponent(DropoutFormComponent);
    component = fixture.componentInstance;
    component.child = new Child("1");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
