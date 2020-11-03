import { AttendanceAverageDashboardComponent } from "app/child-dev-project/attendance/dashboard-widgets/attendance-average-dashboard/attendance-average-dashboard.component";
import { AttendanceWarningsDashboardComponent } from "app/child-dev-project/attendance/dashboard-widgets/attendance-warnings-dashboard/attendance-warnings-dashboard.component";
import { AttendanceWeekDashboardComponent } from "app/child-dev-project/attendance/dashboard-widgets/attendance-week-dashboard/attendance-week-dashboard.component";
import { ChildrenCountDashboardComponent } from "app/child-dev-project/children/children-count-dashboard/children-count-dashboard.component";
import { NoRecentNotesDashboardComponent } from "app/child-dev-project/notes/dashboard-widgets/no-recent-notes-dashboard/no-recent-notes-dashboard.component";
import { RecentNotesDashboardComponent } from "app/child-dev-project/notes/dashboard-widgets/recent-notes-dashboard/recent-notes-dashboard.component";
import { ProgressDashboardComponent } from "../../child-dev-project/progress-dashboard-widget/progress-dashboard/progress-dashboard.component";
import { PreviousSchoolsComponent } from "../../child-dev-project/previous-schools/previous-schools.component";
import { AserComponent } from "../../child-dev-project/aser/aser-component/aser.component";
import { GroupedChildAttendanceComponent } from "../../child-dev-project/children/child-details/grouped-child-attendance/grouped-child-attendance.component";
import { NotesOfChildComponent } from "../../child-dev-project/notes/notes-of-child/notes-of-child.component";
import { HealthCheckupComponent } from "../../child-dev-project/health-checkup/health-checkup-component/health-checkup.component";
import { EducationalMaterialComponent } from "../../child-dev-project/educational-material/educational-material-component/educational-material.component";
import { FormComponent } from "../../child-dev-project/children/child-details/form/form.component";

export const DYNAMIC_COMPONENTS_MAP = new Map<string, any>([
  ["ChildrenCountDashboard", ChildrenCountDashboardComponent],
  ["RecentNotesDashboard", RecentNotesDashboardComponent],
  ["NoRecentNotesDashboard", NoRecentNotesDashboardComponent],
  ["AttendanceWeekDashboard", AttendanceWeekDashboardComponent],
  ["ProgressDashboard", ProgressDashboardComponent],
  ["AttendanceAverageDashboard", AttendanceAverageDashboardComponent],
  ["AttendanceWarningsDashboard", AttendanceWarningsDashboardComponent],
  ["PreviousSchools", PreviousSchoolsComponent],
  ["Aser", AserComponent],
  ["GroupedChildAttendance", GroupedChildAttendanceComponent],
  ["NotesOfChild", NotesOfChildComponent],
  ["HealthCheckup", HealthCheckupComponent],
  ["EducationalMaterial", EducationalMaterialComponent],
  ["Form", FormComponent],
]);