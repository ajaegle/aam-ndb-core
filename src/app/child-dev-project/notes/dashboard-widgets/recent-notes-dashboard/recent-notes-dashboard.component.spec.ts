import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";

import { ChildrenService } from "../../../children/children.service";
import { EntityModule } from "../../../../core/entity/entity.module";
import { RouterTestingModule } from "@angular/router/testing";
import { ChildPhotoService } from "../../../children/child-photo-service/child-photo.service";
import { RecentNotesDashboardComponent } from "./recent-notes-dashboard.component";
import { of } from "rxjs";
import { Child } from "../../../children/model/child";
import { ChildrenModule } from "../../../children/children.module";
import { Angulartics2Module } from "angulartics2";

describe("RecentNotesDashboardComponent", () => {
  let component: RecentNotesDashboardComponent;
  let fixture: ComponentFixture<RecentNotesDashboardComponent>;

  let mockChildrenService: jasmine.SpyObj<ChildrenService>;

  beforeEach(async(() => {
    mockChildrenService = jasmine.createSpyObj("mockChildrenService", [
      "getChildren",
      "getDaysSinceLastNoteOfEachChild",
      "getChild",
    ]);
    mockChildrenService.getChildren.and.returnValue(of([]));
    mockChildrenService.getChild.and.returnValue(of(new Child("")));
    mockChildrenService.getDaysSinceLastNoteOfEachChild.and.returnValue(
      Promise.resolve(new Map())
    );

    TestBed.configureTestingModule({
      imports: [
        ChildrenModule,
        RouterTestingModule.withRoutes([]),
        EntityModule,
        Angulartics2Module.forRoot(),
      ],
      providers: [
        { provide: ChildrenService, useValue: mockChildrenService },
        {
          provide: ChildPhotoService,
          useValue: jasmine.createSpyObj(["getImage"]),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentNotesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", fakeAsync(() => {
    expect(component).toBeTruthy();
    tick();
  }));

  it("should not contain children without note", fakeAsync(() => {
    const mockChildren = [new Child("1"), new Child("2")];
    mockChildrenService.getChildren.and.returnValue(of(mockChildren));

    component.ngOnInit();
    tick();

    expect(component.count).toBe(0);
  }));
});
