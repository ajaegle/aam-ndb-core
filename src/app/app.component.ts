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

import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { AppConfig } from "./core/app-config/app-config";
import { MatDialog } from "@angular/material/dialog";
import { DemoDataGeneratingProgressDialogComponent } from "./core/demo-data/demo-data-generating-progress-dialog.component";
import { AnalyticsService } from "./core/analytics/analytics.service";

/**
 * Component as the main entry point for the app.
 * Actual logic and UI structure is defined in other modules.
 */
@Component({
  selector: "app-root",
  template: "<app-ui></app-ui>",
})
export class AppComponent implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef, // need this small hack in order to catch application root view container ref
    private dialog: MatDialog,
    private analyticsService: AnalyticsService
  ) {
    analyticsService.init();
  }

  ngOnInit() {
    this.loadDemoData();
  }

  // TODO: move loading of demo data to a more suitable place
  private loadDemoData() {
    if (AppConfig.settings.database.useTemporaryDatabase) {
      DemoDataGeneratingProgressDialogComponent.loadDemoDataWithLoadingDialog(
        this.dialog
      );
    }
  }
}
