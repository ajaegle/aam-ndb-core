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
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/first-steps.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-dac18675a3017f9dd12ef34c3e09dbbe"' : 'data-target="#xs-additional-page-dac18675a3017f9dd12ef34c3e09dbbe"' }>
                                                <span class="link-name">First Steps</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-dac18675a3017f9dd12ef34c3e09dbbe"' : 'id="xs-additional-page-dac18675a3017f9dd12ef34c3e09dbbe"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/first-steps/contribution-guidelines.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Contribution Guidelines</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/guidelines-and-recipes.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-46a824287227cf4981fbfd6718f4c479"' : 'data-target="#xs-additional-page-46a824287227cf4981fbfd6718f4c479"' }>
                                                <span class="link-name">Guidelines and Recipes</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-46a824287227cf4981fbfd6718f4c479"' : 'id="xs-additional-page-46a824287227cf4981fbfd6718f4c479"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/guidelines-and-recipes/ux-guidelines.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">UX Guidelines</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/guidelines-and-recipes/writing-documentation.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Writing Documentation</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/guidelines-and-recipes/writing-automated-tests.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Writing Automated Tests</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/guidelines-and-recipes/logging-and-tracking-errors.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Logging and Tracking Errors</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/guidelines-and-recipes/loading-and-saving-data.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Loading and Saving Data</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/guidelines-and-recipes/creating-new-entity-types.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Creating New Entity Types</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/architecture.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-e8181a5c3ea729638d475d89b731f967"' : 'data-target="#xs-additional-page-e8181a5c3ea729638d475d89b731f967"' }>
                                                <span class="link-name">Architecture</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-e8181a5c3ea729638d475d89b731f967"' : 'id="xs-additional-page-e8181a5c3ea729638d475d89b731f967"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/architecture/entity-schema.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Entity Schema</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/architecture/session-and-authentication-system.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Session and Authentication System</a>
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
                                            'data-target="#components-links-module-AdminModule-f7daf2b1f430d5f7674ea632709274a2"' : 'data-target="#xs-components-links-module-AdminModule-f7daf2b1f430d5f7674ea632709274a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-f7daf2b1f430d5f7674ea632709274a2"' :
                                            'id="xs-components-links-module-AdminModule-f7daf2b1f430d5f7674ea632709274a2"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-f7daf2b1f430d5f7674ea632709274a2"' : 'data-target="#xs-injectables-links-module-AdminModule-f7daf2b1f430d5f7674ea632709274a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-f7daf2b1f430d5f7674ea632709274a2"' :
                                        'id="xs-injectables-links-module-AdminModule-f7daf2b1f430d5f7674ea632709274a2"' }>
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
                                            'data-target="#components-links-module-AlertsModule-02e94dd244caf14ab7b03b796874f6e0"' : 'data-target="#xs-components-links-module-AlertsModule-02e94dd244caf14ab7b03b796874f6e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlertsModule-02e94dd244caf14ab7b03b796874f6e0"' :
                                            'id="xs-components-links-module-AlertsModule-02e94dd244caf14ab7b03b796874f6e0"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AlertsModule-02e94dd244caf14ab7b03b796874f6e0"' : 'data-target="#xs-injectables-links-module-AlertsModule-02e94dd244caf14ab7b03b796874f6e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AlertsModule-02e94dd244caf14ab7b03b796874f6e0"' :
                                        'id="xs-injectables-links-module-AlertsModule-02e94dd244caf14ab7b03b796874f6e0"' }>
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
                                        'data-target="#injectables-links-module-AppConfigModule-b4c384fd90d427e7e909fe7ea7c0e85d"' : 'data-target="#xs-injectables-links-module-AppConfigModule-b4c384fd90d427e7e909fe7ea7c0e85d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppConfigModule-b4c384fd90d427e7e909fe7ea7c0e85d"' :
                                        'id="xs-injectables-links-module-AppConfigModule-b4c384fd90d427e7e909fe7ea7c0e85d"' }>
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
                                            'data-target="#components-links-module-AppModule-852d2421bab75b7aabdb797d68eee55d"' : 'data-target="#xs-components-links-module-AppModule-852d2421bab75b7aabdb797d68eee55d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-852d2421bab75b7aabdb797d68eee55d"' :
                                            'id="xs-components-links-module-AppModule-852d2421bab75b7aabdb797d68eee55d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-852d2421bab75b7aabdb797d68eee55d"' : 'data-target="#xs-injectables-links-module-AppModule-852d2421bab75b7aabdb797d68eee55d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-852d2421bab75b7aabdb797d68eee55d"' :
                                        'id="xs-injectables-links-module-AppModule-852d2421bab75b7aabdb797d68eee55d"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfig.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppConfig</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChildrenModule.html" data-type="entity-link">ChildrenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChildrenModule-d91efb42f2894ec8642431e7a92c0fec"' : 'data-target="#xs-components-links-module-ChildrenModule-d91efb42f2894ec8642431e7a92c0fec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChildrenModule-d91efb42f2894ec8642431e7a92c0fec"' :
                                            'id="xs-components-links-module-ChildrenModule-d91efb42f2894ec8642431e7a92c0fec"' }>
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
                                                <a href="components/NoteDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoteDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesManagerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotesManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreviousSchoolsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreviousSchoolsComponent</a>
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
                                        'data-target="#injectables-links-module-ChildrenModule-d91efb42f2894ec8642431e7a92c0fec"' : 'data-target="#xs-injectables-links-module-ChildrenModule-d91efb42f2894ec8642431e7a92c0fec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChildrenModule-d91efb42f2894ec8642431e7a92c0fec"' :
                                        'id="xs-injectables-links-module-ChildrenModule-d91efb42f2894ec8642431e7a92c0fec"' }>
                                        <li class="link">
                                            <a href="injectables/ChildrenService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChildrenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-134d980723cffd1269789958f6d65864"' : 'data-target="#xs-components-links-module-DashboardModule-134d980723cffd1269789958f6d65864"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-134d980723cffd1269789958f6d65864"' :
                                            'id="xs-components-links-module-DashboardModule-134d980723cffd1269789958f6d65864"' }>
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
                                            'data-target="#components-links-module-DemoDataModule-fda5a1f910d127084547505f4e2b7d6c"' : 'data-target="#xs-components-links-module-DemoDataModule-fda5a1f910d127084547505f4e2b7d6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DemoDataModule-fda5a1f910d127084547505f4e2b7d6c"' :
                                            'id="xs-components-links-module-DemoDataModule-fda5a1f910d127084547505f4e2b7d6c"' }>
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
                                        'data-target="#injectables-links-module-EntityModule-a732a677071126a06143d03ea10be0bb"' : 'data-target="#xs-injectables-links-module-EntityModule-a732a677071126a06143d03ea10be0bb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EntityModule-a732a677071126a06143d03ea10be0bb"' :
                                        'id="xs-injectables-links-module-EntityModule-a732a677071126a06143d03ea10be0bb"' }>
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
                                <a href="modules/HelpModule.html" data-type="entity-link">HelpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpModule-984e08db0a4f7cb1c37880d066d9ca8b"' : 'data-target="#xs-components-links-module-HelpModule-984e08db0a4f7cb1c37880d066d9ca8b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpModule-984e08db0a4f7cb1c37880d066d9ca8b"' :
                                            'id="xs-components-links-module-HelpModule-984e08db0a4f7cb1c37880d066d9ca8b"' }>
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
                                            'data-target="#components-links-module-LatestChangesModule-b4d2d54f24eddf72f08648aecd04410f"' : 'data-target="#xs-components-links-module-LatestChangesModule-b4d2d54f24eddf72f08648aecd04410f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LatestChangesModule-b4d2d54f24eddf72f08648aecd04410f"' :
                                            'id="xs-components-links-module-LatestChangesModule-b4d2d54f24eddf72f08648aecd04410f"' }>
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
                                        'data-target="#injectables-links-module-LatestChangesModule-b4d2d54f24eddf72f08648aecd04410f"' : 'data-target="#xs-injectables-links-module-LatestChangesModule-b4d2d54f24eddf72f08648aecd04410f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatestChangesModule-b4d2d54f24eddf72f08648aecd04410f"' :
                                        'id="xs-injectables-links-module-LatestChangesModule-b4d2d54f24eddf72f08648aecd04410f"' }>
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
                                <a href="modules/LoggingModule.html" data-type="entity-link">LoggingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NavigationModule.html" data-type="entity-link">NavigationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavigationModule-a9e30f00f8dcf2c64e04483d353e808f"' : 'data-target="#xs-components-links-module-NavigationModule-a9e30f00f8dcf2c64e04483d353e808f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavigationModule-a9e30f00f8dcf2c64e04483d353e808f"' :
                                            'id="xs-components-links-module-NavigationModule-a9e30f00f8dcf2c64e04483d353e808f"' }>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NavigationModule-a9e30f00f8dcf2c64e04483d353e808f"' : 'data-target="#xs-injectables-links-module-NavigationModule-a9e30f00f8dcf2c64e04483d353e808f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NavigationModule-a9e30f00f8dcf2c64e04483d353e808f"' :
                                        'id="xs-injectables-links-module-NavigationModule-a9e30f00f8dcf2c64e04483d353e808f"' }>
                                        <li class="link">
                                            <a href="injectables/NavigationItemsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NavigationItemsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolsModule.html" data-type="entity-link">SchoolsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SchoolsModule-bc0af20ddca9ab8711b787d635c2479a"' : 'data-target="#xs-components-links-module-SchoolsModule-bc0af20ddca9ab8711b787d635c2479a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SchoolsModule-bc0af20ddca9ab8711b787d635c2479a"' :
                                            'id="xs-components-links-module-SchoolsModule-bc0af20ddca9ab8711b787d635c2479a"' }>
                                            <li class="link">
                                                <a href="components/SchoolBlockComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolBlockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SchoolsModule-bc0af20ddca9ab8711b787d635c2479a"' : 'data-target="#xs-injectables-links-module-SchoolsModule-bc0af20ddca9ab8711b787d635c2479a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolsModule-bc0af20ddca9ab8711b787d635c2479a"' :
                                        'id="xs-injectables-links-module-SchoolsModule-bc0af20ddca9ab8711b787d635c2479a"' }>
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
                                            'data-target="#components-links-module-SessionModule-b02c81aaf0304c1e0f2625e11d836ffe"' : 'data-target="#xs-components-links-module-SessionModule-b02c81aaf0304c1e0f2625e11d836ffe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SessionModule-b02c81aaf0304c1e0f2625e11d836ffe"' :
                                            'id="xs-components-links-module-SessionModule-b02c81aaf0304c1e0f2625e11d836ffe"' }>
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
                                            'data-target="#components-links-module-SyncStatusModule-6550248c0e7ae2a6c60fb113b109e648"' : 'data-target="#xs-components-links-module-SyncStatusModule-6550248c0e7ae2a6c60fb113b109e648"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SyncStatusModule-6550248c0e7ae2a6c60fb113b109e648"' :
                                            'id="xs-components-links-module-SyncStatusModule-6550248c0e7ae2a6c60fb113b109e648"' }>
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
                                <a href="modules/UiHelperModule.html" data-type="entity-link">UiHelperModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' : 'data-target="#xs-components-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' :
                                            'id="xs-components-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' }>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntitySubrecordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntitySubrecordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' : 'data-target="#xs-injectables-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' :
                                        'id="xs-injectables-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmationDialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfirmationDialogService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' : 'data-target="#xs-pipes-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' :
                                            'id="xs-pipes-links-module-UiHelperModule-04bf70ba122d6d7e01ad0b428ab51d41"' }>
                                            <li class="link">
                                                <a href="pipes/KeysPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KeysPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-23ffd2f8bbe86a651027bf7a09288563"' : 'data-target="#xs-components-links-module-UiModule-23ffd2f8bbe86a651027bf7a09288563"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-23ffd2f8bbe86a651027bf7a09288563"' :
                                            'id="xs-components-links-module-UiModule-23ffd2f8bbe86a651027bf7a09288563"' }>
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
                                            'data-target="#components-links-module-UserModule-92fed959b493dd3158004bf2f30baf06"' : 'data-target="#xs-components-links-module-UserModule-92fed959b493dd3158004bf2f30baf06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-92fed959b493dd3158004bf2f30baf06"' :
                                            'id="xs-components-links-module-UserModule-92fed959b493dd3158004bf2f30baf06"' }>
                                            <li class="link">
                                                <a href="components/UserAccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserAccountComponent</a>
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
                                <a href="classes/MenuItem.html" data-type="entity-link">MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockDatabase.html" data-type="entity-link">MockDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockSessionService.html" data-type="entity-link">MockSessionService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link">Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/PouchDatabase.html" data-type="entity-link">PouchDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProgressDashboardConfig.html" data-type="entity-link">ProgressDashboardConfig</a>
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
                                    <a href="injectables/BackupService.html" data-type="entity-link">BackupService</a>
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
                                <a href="interfaces/Address.html" data-type="entity-link">Address</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AttendanceProfile.html" data-type="entity-link">AttendanceProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Card.html" data-type="entity-link">Card</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ColumnGroup.html" data-type="entity-link">ColumnGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Company.html" data-type="entity-link">Company</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContextualCard.html" data-type="entity-link">ContextualCard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySchemaDatatype.html" data-type="entity-link">EntitySchemaDatatype</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitySchemaField.html" data-type="entity-link">EntitySchemaField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FakerStatic.html" data-type="entity-link">FakerStatic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterSelectionOption.html" data-type="entity-link">FilterSelectionOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormValidationResult.html" data-type="entity-link">FormValidationResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FullAddress.html" data-type="entity-link">FullAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Geo.html" data-type="entity-link">Geo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppConfig.html" data-type="entity-link">IAppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProgressDashboardPart.html" data-type="entity-link">ProgressDashboardPart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RollCallRecord.html" data-type="entity-link">RollCallRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateChangedEvent.html" data-type="entity-link">StateChangedEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Transaction.html" data-type="entity-link">Transaction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserCard.html" data-type="entity-link">UserCard</a>
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