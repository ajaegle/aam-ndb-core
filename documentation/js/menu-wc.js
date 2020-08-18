'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ndb-core documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Developer Documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/overview.html" data-type="entity-link" data-context-id="additional">Overview</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/tutorial.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-1027d3472962208c19c6dda1feebbbf7"' : 'data-target="#xs-additional-page-1027d3472962208c19c6dda1feebbbf7"' }>
                                                <span class="link-name">Tutorial</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-1027d3472962208c19c6dda1feebbbf7"' : 'id="xs-additional-page-1027d3472962208c19c6dda1feebbbf7"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/overview-of-technologies.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Overview of Technologies</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/setting-up-the-project.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Setting up the project</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/using-aam-digital-(as-a-user).html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Using Aam Digital (as a user)</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorial/diving-into-the-code.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Diving into the Code</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/how-to-guides.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-30d908c080ff7ca85afdf3b25078edeb"' : 'data-target="#xs-additional-page-30d908c080ff7ca85afdf3b25078edeb"' }>
                                                <span class="link-name">How-To Guides</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-30d908c080ff7ca85afdf3b25078edeb"' : 'id="xs-additional-page-30d908c080ff7ca85afdf3b25078edeb"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/navigate-the-code-structure.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Navigate the Code Structure</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/contribute-code-to-the-project.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Contribute Code to the Project</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/load-and-save-data.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Load and Save Data</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/display-dialogs-and-notifications.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Display Dialogs and Notifications</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/display-related-entities.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Display Related Entities</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/log-errors.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Log Errors</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/write-automated-unit-tests.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Write Automated Unit Tests</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/document-code.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Document Code</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/use-queries-and-indices.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Use Queries and Indices</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/create-a-new-entity-type.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Create a New Entity Type</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/generate-demo-data.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Generate Demo Data</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/how-to-guides/review-a-pull-request.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Review a Pull Request</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/concepts.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-cc3ee55ac7e93ac8a067d9f686c4b470"' : 'data-target="#xs-additional-page-cc3ee55ac7e93ac8a067d9f686c4b470"' }>
                                                <span class="link-name">Concepts</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-cc3ee55ac7e93ac8a067d9f686c4b470"' : 'id="xs-additional-page-cc3ee55ac7e93ac8a067d9f686c4b470"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/overall-architecture.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Overall Architecture</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/entity-schema.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Entity Schema</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/session-and-authentication-system.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Session and Authentication System</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/ux-guidelines.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">UX Guidelines</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/concepts/documentation-structure.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Documentation Structure</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/prerequisites.html" data-type="entity-link" data-context-id="additional">Prerequisites</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-14bbf2ef42c7b5ad64e2d0f253d07de5"' : 'data-target="#xs-components-links-module-AdminModule-14bbf2ef42c7b5ad64e2d0f253d07de5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-14bbf2ef42c7b5ad64e2d0f253d07de5"' :
                                            'id="xs-components-links-module-AdminModule-14bbf2ef42c7b5ad64e2d0f253d07de5"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExportDataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExportDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-14bbf2ef42c7b5ad64e2d0f253d07de5"' : 'data-target="#xs-injectables-links-module-AdminModule-14bbf2ef42c7b5ad64e2d0f253d07de5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-14bbf2ef42c7b5ad64e2d0f253d07de5"' :
                                        'id="xs-injectables-links-module-AdminModule-14bbf2ef42c7b5ad64e2d0f253d07de5"' }>
                                        <li class="link">
                                            <a href="injectables/BackupService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BackupService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChildPhotoUpdateService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChildPhotoUpdateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlertsModule.html" data-type="entity-link">AlertsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlertsModule-c863faff890c3405c9445348d5cd0e21"' : 'data-target="#xs-components-links-module-AlertsModule-c863faff890c3405c9445348d5cd0e21"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlertsModule-c863faff890c3405c9445348d5cd0e21"' :
                                            'id="xs-components-links-module-AlertsModule-c863faff890c3405c9445348d5cd0e21"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AlertsModule-c863faff890c3405c9445348d5cd0e21"' : 'data-target="#xs-injectables-links-module-AlertsModule-c863faff890c3405c9445348d5cd0e21"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AlertsModule-c863faff890c3405c9445348d5cd0e21"' :
                                        'id="xs-injectables-links-module-AlertsModule-c863faff890c3405c9445348d5cd0e21"' }>
                                        <li class="link">
                                            <a href="injectables/AlertService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AlertService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppConfigModule.html" data-type="entity-link">AppConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppConfigModule-30c6b13dd1e85a9c2e812392e1462e7b"' : 'data-target="#xs-injectables-links-module-AppConfigModule-30c6b13dd1e85a9c2e812392e1462e7b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppConfigModule-30c6b13dd1e85a9c2e812392e1462e7b"' :
                                        'id="xs-injectables-links-module-AppConfigModule-30c6b13dd1e85a9c2e812392e1462e7b"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfig.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppConfig</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f86ad12d7711045bcf8c39d59fec460d"' : 'data-target="#xs-components-links-module-AppModule-f86ad12d7711045bcf8c39d59fec460d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f86ad12d7711045bcf8c39d59fec460d"' :
                                            'id="xs-components-links-module-AppModule-f86ad12d7711045bcf8c39d59fec460d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChildrenModule.html" data-type="entity-link">ChildrenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChildrenModule-4a2bccf7b396ffb49e9fc4c026011570"' : 'data-target="#xs-components-links-module-ChildrenModule-4a2bccf7b396ffb49e9fc4c026011570"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChildrenModule-4a2bccf7b396ffb49e9fc4c026011570"' :
                                            'id="xs-components-links-module-ChildrenModule-4a2bccf7b396ffb49e9fc4c026011570"' }>
                                            <li class="link">
                                                <a href="components/AddDayAttendanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddDayAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddMonthAttendanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddMonthAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceAverageDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceAverageDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceBlockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceDayBlockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceDayBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceDaysComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceDaysComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceManagerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceWarningsDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceWarningsDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceWeekDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceWeekDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildAttendanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildBlockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildSelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildSelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildrenCountDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildrenCountDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChildrenListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildrenListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EducationalMaterialComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EducationalMaterialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HealthCheckupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HealthCheckupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoRecentNotesDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoRecentNotesDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesOfChildComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotesOfChildComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreviousSchoolsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreviousSchoolsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecentNotesDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecentNotesDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RollCallComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RollCallComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectGroupChildrenComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectGroupChildrenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChildrenModule-4a2bccf7b396ffb49e9fc4c026011570"' : 'data-target="#xs-injectables-links-module-ChildrenModule-4a2bccf7b396ffb49e9fc4c026011570"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChildrenModule-4a2bccf7b396ffb49e9fc4c026011570"' :
                                        'id="xs-injectables-links-module-ChildrenModule-4a2bccf7b396ffb49e9fc4c026011570"' }>
                                        <li class="link">
                                            <a href="injectables/ChildrenService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChildrenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfirmationDialogModule.html" data-type="entity-link">ConfirmationDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfirmationDialogModule-4057a5e6a5fcaa1b7d3c0967cba10f05"' : 'data-target="#xs-components-links-module-ConfirmationDialogModule-4057a5e6a5fcaa1b7d3c0967cba10f05"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfirmationDialogModule-4057a5e6a5fcaa1b7d3c0967cba10f05"' :
                                            'id="xs-components-links-module-ConfirmationDialogModule-4057a5e6a5fcaa1b7d3c0967cba10f05"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmationDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConfirmationDialogModule-4057a5e6a5fcaa1b7d3c0967cba10f05"' : 'data-target="#xs-injectables-links-module-ConfirmationDialogModule-4057a5e6a5fcaa1b7d3c0967cba10f05"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfirmationDialogModule-4057a5e6a5fcaa1b7d3c0967cba10f05"' :
                                        'id="xs-injectables-links-module-ConfirmationDialogModule-4057a5e6a5fcaa1b7d3c0967cba10f05"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmationDialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfirmationDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConflictResolutionModule.html" data-type="entity-link">ConflictResolutionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConflictResolutionModule-cd071d7859fbeed037c19b4503b4b9c1"' : 'data-target="#xs-components-links-module-ConflictResolutionModule-cd071d7859fbeed037c19b4503b4b9c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConflictResolutionModule-cd071d7859fbeed037c19b4503b4b9c1"' :
                                            'id="xs-components-links-module-ConflictResolutionModule-cd071d7859fbeed037c19b4503b4b9c1"' }>
                                            <li class="link">
                                                <a href="components/CompareRevComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompareRevComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConflictResolutionListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConflictResolutionListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConflictResolutionRoutingModule.html" data-type="entity-link">ConflictResolutionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-884426c67ff1f103c025a15354ef81c3"' : 'data-target="#xs-components-links-module-DashboardModule-884426c67ff1f103c025a15354ef81c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-884426c67ff1f103c025a15354ef81c3"' :
                                            'id="xs-components-links-module-DashboardModule-884426c67ff1f103c025a15354ef81c3"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressDashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DemoDataModule.html" data-type="entity-link">DemoDataModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DemoDataModule-68a7e227ac945b688e49b567b8939793"' : 'data-target="#xs-components-links-module-DemoDataModule-68a7e227ac945b688e49b567b8939793"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DemoDataModule-68a7e227ac945b688e49b567b8939793"' :
                                            'id="xs-components-links-module-DemoDataModule-68a7e227ac945b688e49b567b8939793"' }>
                                            <li class="link">
                                                <a href="components/DemoDataGeneratingProgressDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DemoDataGeneratingProgressDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntityModule.html" data-type="entity-link">EntityModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EntityModule-a0f1d4f6956234fb1432fd4396a28094"' : 'data-target="#xs-injectables-links-module-EntityModule-a0f1d4f6956234fb1432fd4396a28094"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EntityModule-a0f1d4f6956234fb1432fd4396a28094"' :
                                        'id="xs-injectables-links-module-EntityModule-a0f1d4f6956234fb1432fd4396a28094"' }>
                                        <li class="link">
                                            <a href="injectables/EntityMapperService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EntityMapperService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntitySchemaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EntitySchemaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntitySubrecordModule.html" data-type="entity-link">EntitySubrecordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EntitySubrecordModule-674a010b3b250b075ec065de76592c0d"' : 'data-target="#xs-components-links-module-EntitySubrecordModule-674a010b3b250b075ec065de76592c0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EntitySubrecordModule-674a010b3b250b075ec065de76592c0d"' :
                                            'id="xs-components-links-module-EntitySubrecordModule-674a010b3b250b075ec065de76592c0d"' }>
                                            <li class="link">
                                                <a href="components/EntitySubrecordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntitySubrecordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-EntitySubrecordModule-674a010b3b250b075ec065de76592c0d"' : 'data-target="#xs-pipes-links-module-EntitySubrecordModule-674a010b3b250b075ec065de76592c0d"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-EntitySubrecordModule-674a010b3b250b075ec065de76592c0d"' :
                                            'id="xs-pipes-links-module-EntitySubrecordModule-674a010b3b250b075ec065de76592c0d"' }>
                                            <li class="link">
                                                <a href="pipes/KeysPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KeysPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormDialogModule.html" data-type="entity-link">FormDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormDialogModule-6a3c7abde02f45518cfc0b70bfe82f16"' : 'data-target="#xs-components-links-module-FormDialogModule-6a3c7abde02f45518cfc0b70bfe82f16"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormDialogModule-6a3c7abde02f45518cfc0b70bfe82f16"' :
                                            'id="xs-components-links-module-FormDialogModule-6a3c7abde02f45518cfc0b70bfe82f16"' }>
                                            <li class="link">
                                                <a href="components/FormDialogWrapperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormDialogWrapperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FormDialogModule-6a3c7abde02f45518cfc0b70bfe82f16"' : 'data-target="#xs-injectables-links-module-FormDialogModule-6a3c7abde02f45518cfc0b70bfe82f16"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FormDialogModule-6a3c7abde02f45518cfc0b70bfe82f16"' :
                                        'id="xs-injectables-links-module-FormDialogModule-6a3c7abde02f45518cfc0b70bfe82f16"' }>
                                        <li class="link">
                                            <a href="injectables/FormDialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FormDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpModule.html" data-type="entity-link">HelpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpModule-9ad11998dfdbd52561f722dd036c34b5"' : 'data-target="#xs-components-links-module-HelpModule-9ad11998dfdbd52561f722dd036c34b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpModule-9ad11998dfdbd52561f722dd036c34b5"' :
                                            'id="xs-components-links-module-HelpModule-9ad11998dfdbd52561f722dd036c34b5"' }>
                                            <li class="link">
                                                <a href="components/HowToComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HowToComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatestChangesModule.html" data-type="entity-link">LatestChangesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LatestChangesModule-9770fbfce44f7815889d35b27f9ee92f"' : 'data-target="#xs-components-links-module-LatestChangesModule-9770fbfce44f7815889d35b27f9ee92f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LatestChangesModule-9770fbfce44f7815889d35b27f9ee92f"' :
                                            'id="xs-components-links-module-LatestChangesModule-9770fbfce44f7815889d35b27f9ee92f"' }>
                                            <li class="link">
                                                <a href="components/AppVersionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppVersionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangelogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangelogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LatestChangesModule-9770fbfce44f7815889d35b27f9ee92f"' : 'data-target="#xs-injectables-links-module-LatestChangesModule-9770fbfce44f7815889d35b27f9ee92f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatestChangesModule-9770fbfce44f7815889d35b27f9ee92f"' :
                                        'id="xs-injectables-links-module-LatestChangesModule-9770fbfce44f7815889d35b27f9ee92f"' }>
                                        <li class="link">
                                            <a href="injectables/LatestChangesDialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LatestChangesDialogService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LatestChangesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LatestChangesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateManagerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UpdateManagerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavigationModule.html" data-type="entity-link">NavigationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavigationModule-c0689c7a5ab7da2e8c15eafc88d4b8da"' : 'data-target="#xs-components-links-module-NavigationModule-c0689c7a5ab7da2e8c15eafc88d4b8da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavigationModule-c0689c7a5ab7da2e8c15eafc88d4b8da"' :
                                            'id="xs-components-links-module-NavigationModule-c0689c7a5ab7da2e8c15eafc88d4b8da"' }>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NavigationModule-c0689c7a5ab7da2e8c15eafc88d4b8da"' : 'data-target="#xs-injectables-links-module-NavigationModule-c0689c7a5ab7da2e8c15eafc88d4b8da"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NavigationModule-c0689c7a5ab7da2e8c15eafc88d4b8da"' :
                                        'id="xs-injectables-links-module-NavigationModule-c0689c7a5ab7da2e8c15eafc88d4b8da"' }>
                                        <li class="link">
                                            <a href="injectables/NavigationItemsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NavigationItemsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotesModule.html" data-type="entity-link">NotesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotesModule-17d1009f7a006602d3a6e073151277fd"' : 'data-target="#xs-components-links-module-NotesModule-17d1009f7a006602d3a6e073151277fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotesModule-17d1009f7a006602d3a6e073151277fd"' :
                                            'id="xs-components-links-module-NotesModule-17d1009f7a006602d3a6e073151277fd"' }>
                                            <li class="link">
                                                <a href="components/ChildMeetingNoteAttendanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChildMeetingNoteAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoteDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotePresenceListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotePresenceListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesManagerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotesManagerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolsModule.html" data-type="entity-link">SchoolsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SchoolsModule-272bd102330fa5921592f7a741ba4e91"' : 'data-target="#xs-components-links-module-SchoolsModule-272bd102330fa5921592f7a741ba4e91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SchoolsModule-272bd102330fa5921592f7a741ba4e91"' :
                                            'id="xs-components-links-module-SchoolsModule-272bd102330fa5921592f7a741ba4e91"' }>
                                            <li class="link">
                                                <a href="components/SchoolBlockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SchoolsModule-272bd102330fa5921592f7a741ba4e91"' : 'data-target="#xs-injectables-links-module-SchoolsModule-272bd102330fa5921592f7a741ba4e91"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolsModule-272bd102330fa5921592f7a741ba4e91"' :
                                        'id="xs-injectables-links-module-SchoolsModule-272bd102330fa5921592f7a741ba4e91"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SchoolsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SessionModule.html" data-type="entity-link">SessionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SessionModule-21129733646979415884213bbfa6d9c2"' : 'data-target="#xs-components-links-module-SessionModule-21129733646979415884213bbfa6d9c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SessionModule-21129733646979415884213bbfa6d9c2"' :
                                            'id="xs-components-links-module-SessionModule-21129733646979415884213bbfa6d9c2"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SyncStatusModule.html" data-type="entity-link">SyncStatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SyncStatusModule-7665b26ebdf11530d6048744606048f5"' : 'data-target="#xs-components-links-module-SyncStatusModule-7665b26ebdf11530d6048744606048f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SyncStatusModule-7665b26ebdf11530d6048744606048f5"' :
                                            'id="xs-components-links-module-SyncStatusModule-7665b26ebdf11530d6048744606048f5"' }>
                                            <li class="link">
                                                <a href="components/InitialSyncDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InitialSyncDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SyncStatusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SyncStatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-04df58483e06db2971496ddbb61ac144"' : 'data-target="#xs-components-links-module-UiModule-04df58483e06db2971496ddbb61ac144"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-04df58483e06db2971496ddbb61ac144"' :
                                            'id="xs-components-links-module-UiModule-04df58483e06db2971496ddbb61ac144"' }>
                                            <li class="link">
                                                <a href="components/PrimaryActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrimaryActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-bdb1e8c0fc41fb54704eeacedaebcace"' : 'data-target="#xs-components-links-module-UserModule-bdb1e8c0fc41fb54704eeacedaebcace"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-bdb1e8c0fc41fb54704eeacedaebcace"' :
                                            'id="xs-components-links-module-UserModule-bdb1e8c0fc41fb54704eeacedaebcace"' }>
                                            <li class="link">
                                                <a href="components/UserAccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserAccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WebdavModule.html" data-type="entity-link">WebdavModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WebdavModule-3b72afdedea8457acbc5fac8564962a8"' : 'data-target="#xs-components-links-module-WebdavModule-3b72afdedea8457acbc5fac8564962a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WebdavModule-3b72afdedea8457acbc5fac8564962a8"' :
                                            'id="xs-components-links-module-WebdavModule-3b72afdedea8457acbc5fac8564962a8"' }>
                                            <li class="link">
                                                <a href="components/CloudFileServiceUserSettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CloudFileServiceUserSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WebdavModule-3b72afdedea8457acbc5fac8564962a8"' : 'data-target="#xs-injectables-links-module-WebdavModule-3b72afdedea8457acbc5fac8564962a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WebdavModule-3b72afdedea8457acbc5fac8564962a8"' :
                                        'id="xs-injectables-links-module-WebdavModule-3b72afdedea8457acbc5fac8564962a8"' }>
                                        <li class="link">
                                            <a href="injectables/CloudFileService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CloudFileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Alert.html" data-type="entity-link">Alert</a>
                            </li>
                            <li class="link">
                                <a href="classes/Aser.html" data-type="entity-link">Aser</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttendanceDay.html" data-type="entity-link">AttendanceDay</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttendanceMonth.html" data-type="entity-link">AttendanceMonth</a>
                            </li>
                            <li class="link">
                                <a href="classes/Changelog.html" data-type="entity-link">Changelog</a>
                            </li>
                            <li class="link">
                                <a href="classes/Child.html" data-type="entity-link">Child</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChildSchoolRelation.html" data-type="entity-link">ChildSchoolRelation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnDescription.html" data-type="entity-link">ColumnDescription</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomFaker.html" data-type="entity-link">CustomFaker</a>
                            </li>
                            <li class="link">
                                <a href="classes/Database.html" data-type="entity-link">Database</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoChildConfig.html" data-type="entity-link">DemoChildConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoDataGenerator.html" data-type="entity-link">DemoDataGenerator</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoDataServiceConfig.html" data-type="entity-link">DemoDataServiceConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoEducationMaterialConfig.html" data-type="entity-link">DemoEducationMaterialConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoNoteConfig.html" data-type="entity-link">DemoNoteConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoSchoolConfig.html" data-type="entity-link">DemoSchoolConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/EducationalMaterial.html" data-type="entity-link">EducationalMaterial</a>
                            </li>
                            <li class="link">
                                <a href="classes/Entity.html" data-type="entity-link">Entity</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterSelection.html" data-type="entity-link">FilterSelection</a>
                            </li>
                            <li class="link">
                                <a href="classes/HealthCheck.html" data-type="entity-link">HealthCheck</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadChildPhotoEntitySchemaDatatype.html" data-type="entity-link">LoadChildPhotoEntitySchemaDatatype</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeetingNoteAttendance.html" data-type="entity-link">MeetingNoteAttendance</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockDatabase.html" data-type="entity-link">MockDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockSessionService.html" data-type="entity-link">MockSessionService</a>
                            </li>
                            <li class="link">
                                <a href="classes/NdbCorePage.html" data-type="entity-link">NdbCorePage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link">Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/OnlineSessionService.html" data-type="entity-link">OnlineSessionService</a>
                            </li>
                            <li class="link">
                                <a href="classes/PouchDatabase.html" data-type="entity-link">PouchDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProgressDashboardConfig.html" data-type="entity-link">ProgressDashboardConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryDataSource.html" data-type="entity-link">QueryDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link">School</a>
                            </li>
                            <li class="link">
                                <a href="classes/StateHandler.html" data-type="entity-link">StateHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AttendanceMonthConflictResolutionStrategy.html" data-type="entity-link">AttendanceMonthConflictResolutionStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AutoResolutionService.html" data-type="entity-link">AutoResolutionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChildPhotoService.html" data-type="entity-link">ChildPhotoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoAserGeneratorService.html" data-type="entity-link">DemoAserGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoAttendanceGenerator.html" data-type="entity-link">DemoAttendanceGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoChildGenerator.html" data-type="entity-link">DemoChildGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoChildSchoolRelationGenerator.html" data-type="entity-link">DemoChildSchoolRelationGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoDataService.html" data-type="entity-link">DemoDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoEducationalMaterialGeneratorService.html" data-type="entity-link">DemoEducationalMaterialGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoHealthCheckGeneratorService.html" data-type="entity-link">DemoHealthCheckGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoNoteGeneratorService.html" data-type="entity-link">DemoNoteGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoSchoolGenerator.html" data-type="entity-link">DemoSchoolGenerator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoUserGeneratorService.html" data-type="entity-link">DemoUserGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DemoWidgetGeneratorService.html" data-type="entity-link">DemoWidgetGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalSession.html" data-type="entity-link">LocalSession</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingErrorHandler.html" data-type="entity-link">LoggingErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingService.html" data-type="entity-link">LoggingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RemoteSession.html" data-type="entity-link">RemoteSession</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionService.html" data-type="entity-link">SessionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SyncedSessionService.html" data-type="entity-link">SyncedSessionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoggedInGuard.html" data-type="entity-link">LoggedInGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AttendanceProfile.html" data-type="entity-link">AttendanceProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnGroup.html" data-type="entity-link">ColumnGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfirmationDialogConfig.html" data-type="entity-link">ConfirmationDialogConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConflictResolutionStrategy.html" data-type="entity-link">ConflictResolutionStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySchemaDatatype.html" data-type="entity-link">EntitySchemaDatatype</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySchemaField.html" data-type="entity-link">EntitySchemaField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterSelectionOption.html" data-type="entity-link">FilterSelectionOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormValidationResult.html" data-type="entity-link">FormValidationResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppConfig.html" data-type="entity-link">IAppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatorSettings.html" data-type="entity-link">PaginatorSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProgressDashboardPart.html" data-type="entity-link">ProgressDashboardPart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RollCallRecord.html" data-type="entity-link">RollCallRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShowsEntity.html" data-type="entity-link">ShowsEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateChangedEvent.html" data-type="entity-link">StateChangedEvent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});