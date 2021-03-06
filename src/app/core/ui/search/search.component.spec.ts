import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchComponent } from "./search.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule } from "@angular/forms";
import { Database } from "../../database/database";
import { CommonModule } from "@angular/common";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ChildrenModule } from "../../../child-dev-project/children/children.module";
import { SchoolsModule } from "../../../child-dev-project/schools/schools.module";
import { EntitySchemaService } from "../../entity/schema/entity-schema.service";
import { Child } from "../../../child-dev-project/children/model/child";
import { School } from "../../../child-dev-project/schools/model/school";
import { RouterTestingModule } from "@angular/router/testing";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let mockDatabase: jasmine.SpyObj<Database>;

  beforeEach(async(() => {
    mockDatabase = jasmine.createSpyObj("mockDatabase", [
      "query",
      "saveDatabaseIndex",
    ]);

    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        CommonModule,
        FormsModule,
        NoopAnimationsModule,
        ChildrenModule,
        SchoolsModule,
        MatToolbarModule,
        RouterTestingModule,
      ],
      providers: [
        EntitySchemaService,
        { provide: Database, useValue: mockDatabase },
      ],
      declarations: [SearchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(mockDatabase.saveDatabaseIndex).toHaveBeenCalled();
  });

  it("should not search for less than MIN_CHARACTERS_FOR_SEARCH character of input", async () => {
    let result = await component.startSearch("A");
    component.handleSearchQueryResult(result);
    expect(mockDatabase.query).not.toHaveBeenCalled();
    expect(component.results).toEqual([]);

    result = await component.startSearch("AB");
    component.handleSearchQueryResult(result);
    expect(mockDatabase.query).not.toHaveBeenCalled();
    expect(component.results).toEqual([]);
  });

  it("should not search for less than one real character of input", async () => {
    const result = await component.startSearch("   ");
    component.handleSearchQueryResult(result);
    expect(mockDatabase.query).not.toHaveBeenCalled();
    expect(component.results).toEqual([]);
  });

  it("should reset results if a a null search is performed", async () => {
    const result = await component.startSearch(null);
    component.handleSearchQueryResult(result);
    expect(mockDatabase.query).not.toHaveBeenCalled();
    expect(component.results).toEqual([]);
  });

  it("should set results correctly for search input", async () => {
    const child1 = new Child("1");
    child1.name = "Adam X";
    const school1 = new School("s1");
    school1.name = "Anglo Primary";

    const mockQueryResults = {
      rows: [
        { id: child1.getId(), doc: child1 },
        { id: school1.getId(), doc: school1 },
      ],
    };
    mockDatabase.query.and.returnValue(Promise.resolve(mockQueryResults));

    const result = await component.startSearch("Ada");
    component.handleSearchQueryResult(result);
    expect(mockDatabase.query).toHaveBeenCalled();
    expect(component.results).toEqual([child1, school1]);
  });

  it("should not include duplicates in results", async () => {
    const child1 = new Child("1");
    child1.name = "Adam Ant";

    const mockQueryResults = {
      rows: [
        { id: child1.getId(), doc: child1 },
        { id: child1.getId(), doc: child1 }, // may be returned twice from db if several indexed values match the search
      ],
    };
    mockDatabase.query.and.returnValue(Promise.resolve(mockQueryResults));

    const result = await component.startSearch("Ada");
    component.handleSearchQueryResult(result);
    expect(mockDatabase.query).toHaveBeenCalled();
    expect(component.results.length).toBe(1);
    expect(component.results).toEqual([child1]);
  });

  it("should only include results matching all search terms (words)", async () => {
    const child1 = new Child("1");
    child1.name = "Adam X";
    const school1 = new School("s1");
    school1.name = "Anglo Primary";

    const mockQueryResults = {
      rows: [
        { id: child1.getId(), doc: child1 },
        { id: school1.getId(), doc: school1 },
      ],
    };
    mockDatabase.query.and.returnValue(Promise.resolve(mockQueryResults));

    const result = await component.startSearch("A X");
    component.handleSearchQueryResult(result);
    expect(mockDatabase.query).toHaveBeenCalled();
    expect(component.results).toEqual([child1]);
  });
});
