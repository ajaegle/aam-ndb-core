import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { FilterSelection } from "../../../core/filter/filter-selection/filter-selection";
import { Child } from "../../children/model/child";
import { ChildrenService } from "../../children/children.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { AttendanceMonth } from "../model/attendance-month";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: "app-attendance-analysis",
  templateUrl: "./attendance-analysis.component.html",
  styleUrls: ["./attendance-analysis.component.scss"],
})
export class AttendanceAnalysisComponent implements OnInit, AfterViewInit {
  filterFrom: Date;
  filterUntil: Date;
  attendanceType = "";
  displayType = "daily";

  childrenAll: Child[];

  dataSource = new MatTableDataSource<any>();
  columnsToDisplay = [
    "child",
    "attendanceType",
    "averageAttendance",
    "totalWorking",
    "totalAttended",
    "totalAbsent",
    "totalLate",
    "attendance",
    "recordCount",
  ];
  @ViewChild(MatSort) sort: MatSort;
  loading = 0;

  centerFS = new FilterSelection("center", []);
  dropoutFS = new FilterSelection("status", [
    {
      key: "active",
      label: "Current Project Children",
      filterFun: (c: Child) => c.isActive(),
    },
    {
      key: "dropout",
      label: "Dropouts",
      filterFun: (c: Child) => !c.isActive(),
    },
    { key: "", label: "All", filterFun: () => true },
  ]);
  filterSelections = [this.dropoutFS, this.centerFS];

  constructor(private childrenService: ChildrenService) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.filterFrom = new Date();
    this.filterFrom.setDate(1);
    this.filterUntil = new Date();
    this.filterUntil.setDate(1);
    this.filterUntil.setMonth(this.filterUntil.getMonth() + 1);

    this.childrenService
      .getChildren()
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.childrenAll = data.filter((c) => c.isActive());
        this.initCenterFilterOptions();
        this.applyFilterSelections();
      });
  }

  private initCenterFilterOptions() {
    const centers = this.childrenAll
      .map((c) => c.center)
      .filter((value, index, arr) => arr.indexOf(value) === index);

    const options = [{ key: "", label: "All", filterFun: (c: Child) => true }];

    centers.forEach((center) => {
      options.push({
        key: center.toLowerCase(),
        label: center,
        filterFun: (c: Child) => c.center === center,
      });
    });

    this.centerFS.options = options;
  }

  applyFilterSelections() {
    this.loading = 0;
    let filteredData = this.childrenAll;

    this.filterSelections.forEach((f) => {
      filteredData = filteredData.filter(f.getSelectedFilterFunction());
    });

    let data = [];
    filteredData.forEach(
      (child) => (data = data.concat(this.loadChildRecords(child)))
    );

    this.dataSource.data = data;
  }

  loadChildRecords(child: Child): any[] {
    this.loading++;
    const recordCoaching = {
      child: child,
      attendanceType: "coaching",
      attendance: [],
      averageAttendance: 0,
    };
    const recordSchool = {
      child: child,
      attendanceType: "school",
      attendance: [],
      averageAttendance: 0,
    };

    this.childrenService
      .getAttendancesOfChild(child.getId())
      .pipe(untilDestroyed(this))
      .subscribe((attendances) => {
        attendances.forEach((att) => {
          if (
            this.isLaterOrEqualMonth(att.month, this.filterFrom) &&
            this.isEarlierOrEqualMonth(att.month, this.filterUntil)
          ) {
            if (att.institution === "school") {
              recordSchool.attendance.push(att);
            } else if (att.institution === "coaching") {
              recordCoaching.attendance.push(att);
            }
          }
        });

        this.calculateRecordStats(recordSchool);
        this.calculateRecordStats(recordCoaching);

        this.loading--;
      });

    return [recordSchool, recordCoaching];
  }

  calculateRecordStats(record) {
    const stats = record.attendance.reduce(
      (acc, a: AttendanceMonth) => {
        if (a.daysWorking > 0) {
          acc.count++;
          acc.daysWorking += a.daysWorking;
          acc.daysAttended += a.daysAttended;
          acc.daysLate += a.daysLate;
        }
        return acc;
      },
      { sum: 0, count: 0, daysWorking: 0, daysAttended: 0, daysLate: 0 }
    );
    record.recordCount = stats.count;
    record.averageAttendance = stats.daysAttended / stats.daysWorking;
    record.totalWorking = stats.daysWorking;
    record.totalAttended = stats.daysAttended;
    record.totalAbsent = stats.daysWorking - stats.daysAttended;
    record.totalLate = stats.daysLate;
  }

  private isLaterOrEqualMonth(month: Date, filterFrom: Date) {
    return (
      month.getFullYear() > filterFrom.getFullYear() ||
      (month.getFullYear() === filterFrom.getFullYear() &&
        month.getMonth() >= filterFrom.getMonth())
    );
  }
  private isEarlierOrEqualMonth(month: Date, filterUntil: Date) {
    return (
      month.getFullYear() < filterUntil.getFullYear() ||
      (month.getFullYear() === filterUntil.getFullYear() &&
        month.getMonth() <= filterUntil.getMonth())
    );
  }
}
