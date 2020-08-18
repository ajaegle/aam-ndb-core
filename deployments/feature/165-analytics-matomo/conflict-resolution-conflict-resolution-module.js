(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conflict-resolution-conflict-resolution-module"],{

/***/ "./src/app/conflict-resolution/auto-resolution/auto-resolution.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/conflict-resolution/auto-resolution/auto-resolution.service.ts ***!
  \********************************************************************************/
/*! exports provided: AutoResolutionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoResolutionService", function() { return AutoResolutionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conflict_resolution_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conflict-resolution-strategy */ "./src/app/conflict-resolution/auto-resolution/conflict-resolution-strategy.ts");
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};



/**
 * Attempt automatic conflict resolutions or identify trivial conflicts for semi-automatic resolution.
 */
var AutoResolutionService = /** @class */ (function () {
    function AutoResolutionService(resolutionStrategies) {
        this.resolutionStrategies = resolutionStrategies;
    }
    /**
     * Checks whether any registered resolution strategy suggests that the conflicting version should be automatically deleted.
     *
     * This method does not delete the conflict. It only suggests whether it should be deleted automatically.
     *
     * @param currentDoc The currently active revision of the doc
     * @param conflictingDoc The conflicting revision of the doc to be checked whether it can be deleted
     */
    AutoResolutionService.prototype.shouldDeleteConflictingRevision = function (currentDoc, conflictingDoc) {
        var e_1, _a;
        try {
            for (var _b = __values(this.resolutionStrategies), _c = _b.next(); !_c.done; _c = _b.next()) {
                var resolutionStrategy = _c.value;
                if (resolutionStrategy.autoDeleteConflictingRevision(currentDoc, conflictingDoc)) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    AutoResolutionService.ɵfac = function AutoResolutionService_Factory(t) { return new (t || AutoResolutionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_conflict_resolution_strategy__WEBPACK_IMPORTED_MODULE_1__["CONFLICT_RESOLUTION_STRATEGY"])); };
    AutoResolutionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AutoResolutionService, factory: AutoResolutionService.ɵfac, providedIn: "root" });
    return AutoResolutionService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoResolutionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_conflict_resolution_strategy__WEBPACK_IMPORTED_MODULE_1__["CONFLICT_RESOLUTION_STRATEGY"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/conflict-resolution/compare-rev/compare-rev.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/conflict-resolution/compare-rev/compare-rev.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompareRevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareRevComponent", function() { return CompareRevComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var deep_object_diff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-object-diff */ "./node_modules/deep-object-diff/dist/index.js");
/* harmony import */ var deep_object_diff__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_object_diff__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/confirmation-dialog/confirmation-dialog.service */ "./src/app/core/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _core_database_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/database/database */ "./src/app/core/database/database.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm5/snack-bar.js");
/* harmony import */ var _auto_resolution_auto_resolution_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auto-resolution/auto-resolution.service */ "./src/app/conflict-resolution/auto-resolution/auto-resolution.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm5/expansion.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm5/tooltip.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/fesm5/text-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



















function CompareRevComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CompareRevComponent_mat_expansion_panel_0_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.loadRev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function CompareRevComponent_mat_expansion_panel_0_Template_span_mouseover_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.docString = ctx_r4.stringify(ctx_r4.doc); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Conflicting Entity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompareRevComponent_mat_expansion_panel_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.resolveByManualEdit(ctx_r5.diffs); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Choose conflicting version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Custom Resolution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompareRevComponent_mat_expansion_panel_0_Template_textarea_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.diffsCustom = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompareRevComponent_mat_expansion_panel_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.resolveByManualEdit(ctx_r7.diffsCustom); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Save manually resolved record ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Current Entity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompareRevComponent_mat_expansion_panel_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.resolveByDelete(ctx_r8.revDoc); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Choose current version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.docString);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.rev);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("        ", ctx_r0.diffs, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.diffsCustom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("        ", ctx_r0.diffsReverse, "\n      ");
} }
function CompareRevComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Resolved (", ctx_r1.resolution, ")");
} }
/**
 * Visualize one specific conflicting document revision and offer resolution options.
 */
var CompareRevComponent = /** @class */ (function () {
    function CompareRevComponent(db, confirmationDialog, snackBar, conflictResolver) {
        this.db = db;
        this.confirmationDialog = confirmationDialog;
        this.snackBar = snackBar;
        this.conflictResolver = conflictResolver;
        /** whether/how this conflict has been resolved */
        this.resolution = null;
    }
    /**
     * Load the document version (revision) to be displayed and generate the diffs to be visualized.
     */
    CompareRevComponent.prototype.loadRev = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, diffObject, diffReverseObject, isIrrelevantConflictingDoc, success;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.db.get(this.doc._id, { rev: this.rev })];
                    case 1:
                        _a.revDoc = _b.sent();
                        diffObject = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_1__["diff"])(this.doc, this.revDoc);
                        this.diffs = this.stringify(diffObject);
                        diffReverseObject = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_1__["diff"])(this.revDoc, this.doc);
                        this.diffsReverse = this.stringify(diffReverseObject);
                        this.diffsCustom = this.stringify(diffReverseObject);
                        isIrrelevantConflictingDoc = this.conflictResolver.shouldDeleteConflictingRevision(this.doc, this.revDoc);
                        if (!isIrrelevantConflictingDoc) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.deleteDoc(this.revDoc)];
                    case 2:
                        success = _b.sent();
                        if (success) {
                            this.resolution = "automatically deleted trivial conflict";
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Generate a human-readable string of the given object.
     * @param entity Object to be stringified
     */
    CompareRevComponent.prototype.stringify = function (entity) {
        return JSON.stringify(entity, function (k, v) { return (k === "_rev" ? undefined : v); }, // ignore "_rev"
        2);
    };
    /**
     * Resolve the displayed conflict by deleting the conflicting revision doc and keeping the current doc.
     * @param docToDelete Document to be deleted
     */
    CompareRevComponent.prototype.resolveByDelete = function (docToDelete) {
        var _this = this;
        var dialogRef = this.confirmationDialog.openDialog("Delete Conflicting Version?", "Are you sure you want to keep the current version and delete this conflicting version? " +
            this.stringify(docToDelete));
        dialogRef.afterClosed().subscribe(function (confirmed) { return __awaiter(_this, void 0, void 0, function () {
            var success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirmed) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.deleteDoc(docToDelete)];
                    case 1:
                        success = _a.sent();
                        if (success) {
                            this.resolution = "deleted conflicting version";
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    CompareRevComponent.prototype.deleteDoc = function (docToDelete) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.remove(docToDelete)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        e_1 = _a.sent();
                        errorMessage = e_1.message || e_1.toString();
                        this.snackBar.open("Error trying to delete conflicting version: " + errorMessage);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CompareRevComponent.prototype.saveDoc = function (docToSave) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.put(docToSave)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2:
                        e_2 = _a.sent();
                        errorMessage = e_2.message || e_2.toString();
                        this.snackBar.open("Error trying to save version: " + errorMessage);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Apply the given diff, save the resulting new document to the database
     * and remove the conflicting document, thereby resolving the conflict.
     *
     * This method is also used to resolve the conflict to keep the conflicting version instead of the current doc.
     * Then this simply applies the diff of the existing conflicting version instead of a user-edited diff.
     *
     * @param diffStringToApply The (user-edited) diff to be applied to the current doc
     */
    CompareRevComponent.prototype.resolveByManualEdit = function (diffStringToApply) {
        return __awaiter(this, void 0, void 0, function () {
            var originalDoc, diffToApply, newChanges, dialogRef;
            var _this = this;
            return __generator(this, function (_a) {
                originalDoc = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge({}, this.doc);
                diffToApply = JSON.parse(diffStringToApply);
                lodash__WEBPACK_IMPORTED_MODULE_2___default.a.merge(this.doc, diffToApply);
                newChanges = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_1__["diff"])(originalDoc, this.doc);
                dialogRef = this.confirmationDialog.openDialog("Save Changes for Conflict Resolution?", "Are you sure you want to save the following changes and delete the conflicting version? " +
                    this.stringify(newChanges));
                dialogRef.afterClosed().subscribe(function (confirmed) { return __awaiter(_this, void 0, void 0, function () {
                    var successSave, successDel;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!confirmed) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.saveDoc(this.doc)];
                            case 1:
                                successSave = _a.sent();
                                return [4 /*yield*/, this.deleteDoc(this.revDoc)];
                            case 2:
                                successDel = _a.sent();
                                if (successSave && successDel) {
                                    if (diffStringToApply === this.diffs) {
                                        this.resolution = "selected conflicting version";
                                    }
                                    else {
                                        this.resolution = "resolved manually";
                                    }
                                }
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    CompareRevComponent.ɵfac = function CompareRevComponent_Factory(t) { return new (t || CompareRevComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_database_database__WEBPACK_IMPORTED_MODULE_4__["Database"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auto_resolution_auto_resolution_service__WEBPACK_IMPORTED_MODULE_6__["AutoResolutionService"])); };
    CompareRevComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompareRevComponent, selectors: [["app-compare-rev"]], inputs: { rev: "rev", doc: "doc" }, decls: 2, vars: 2, consts: [[3, "opened", 4, "ngIf"], [4, "ngIf"], [3, "opened"], [3, "matTooltip", "mouseover"], ["fxLayout", "row", "fxLayoutGap", "10px"], ["fxFlex", "50"], ["for", "conflictingDiff"], ["id", "conflictingDiff", "cdkTextareaAutosize", "", "disabled", "", 1, "diffText", "conflicting"], ["mat-raised-button", "", 1, "resolution-btn", 3, "click"], ["for", "customDiff"], ["id", "customDiff", "cdkTextareaAutosize", "", 1, "diffText", "custom", 3, "ngModel", "ngModelChange"], ["for", "currentDiff"], ["id", "currentDiff", "cdkTextareaAutosize", "", "disabled", "", 1, "diffText", "current"]], template: function CompareRevComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CompareRevComponent_mat_expansion_panel_0_Template, 27, 5, "mat-expansion-panel", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompareRevComponent_div_1_Template, 3, 1, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.resolution);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resolution);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_11__["CdkTextareaAutosize"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]], styles: [".diffText[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n}\n\n.resolution-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.conflicting[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.1);\n}\n\n.current[_ngcontent-%COMP%] {\n  background: rgba(0, 128, 0, 0.1);\n}\n\n.custom[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.1);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25kYi1jb3JlL25kYi1jb3JlL3NyYy9hcHAvY29uZmxpY3QtcmVzb2x1dGlvbi9jb21wYXJlLXJldi9jb21wYXJlLXJldi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29uZmxpY3QtcmVzb2x1dGlvbi9jb21wYXJlLXJldi9jb21wYXJlLXJldi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0NBQUE7QUNBRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb25mbGljdC1yZXNvbHV0aW9uL2NvbXBhcmUtcmV2L2NvbXBhcmUtcmV2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGlmZlRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5yZXNvbHV0aW9uLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29uZmxpY3Rpbmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcbn1cbi5jdXJyZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjgsIDAsIDAuMSk7XG59XG4uY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLmRpZmZUZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ucmVzb2x1dGlvbi1idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbmZsaWN0aW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XG59XG5cbi5jdXJyZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjgsIDAsIDAuMSk7XG59XG5cbi5jdXN0b20ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"] });
    return CompareRevComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompareRevComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-compare-rev",
                templateUrl: "./compare-rev.component.html",
                styleUrls: ["./compare-rev.component.scss"],
            }]
    }], function () { return [{ type: _core_database_database__WEBPACK_IMPORTED_MODULE_4__["Database"] }, { type: _core_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _auto_resolution_auto_resolution_service__WEBPACK_IMPORTED_MODULE_6__["AutoResolutionService"] }]; }, { rev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], doc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/conflict-resolution/conflict-resolution-list/conflict-resolution-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/conflict-resolution/conflict-resolution-list/conflict-resolution-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ConflictResolutionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConflictResolutionListComponent", function() { return ConflictResolutionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm5/paginator.js");
/* harmony import */ var _core_database_query_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/database/query-data-source */ "./src/app/core/database/query-data-source.ts");
/* harmony import */ var _core_database_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/database/database */ "./src/app/core/database/database.ts");
/* harmony import */ var _core_entity_schema_entity_schema_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/entity/schema/entity-schema.service */ "./src/app/core/entity/schema/entity-schema.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm5/sort.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/fesm5/progress-bar.js");
/* harmony import */ var _compare_rev_compare_rev_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../compare-rev/compare-rev.component */ "./src/app/conflict-resolution/compare-rev/compare-rev.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














function ConflictResolutionListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConflictResolutionListComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " _id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConflictResolutionListComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r7.id, "");
} }
function ConflictResolutionListComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConflictResolutionListComponent_td_11_app_compare_rev_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-compare-rev", 14);
} if (rf & 2) {
    var rev_r10 = ctx.$implicit;
    var row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rev", rev_r10)("doc", row_r8.doc);
} }
function ConflictResolutionListComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConflictResolutionListComponent_td_11_app_compare_rev_1_Template, 1, 2, "app-compare-rev", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r8.key);
} }
function ConflictResolutionListComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
function ConflictResolutionListComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
var _c0 = function () { return [5, 10, 20]; };
/**
 * List all document conflicts and allow the user to expand for details and manual resolution.
 */
var ConflictResolutionListComponent = /** @class */ (function () {
    function ConflictResolutionListComponent(db, entitySchemaService) {
        this.db = db;
        this.entitySchemaService = entitySchemaService;
        /** visible table columns in the template */
        this.columnsToDisplay = ["id", "data"];
    }
    ConflictResolutionListComponent.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createDatabaseIndexForConflicts()];
                    case 1:
                        _a.sent();
                        this.dataSource = new _core_database_query_data_source__WEBPACK_IMPORTED_MODULE_2__["QueryDataSource"](this.db, "conflicts/all");
                        this.dataSource.paginator = this.paginator;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create the database index to query document conflicts, if the index doesn't exist already.
     */
    ConflictResolutionListComponent.prototype.createDatabaseIndexForConflicts = function () {
        var designDoc = {
            _id: "_design/conflicts",
            views: {
                all: {
                    map: "(doc) => { " +
                        "if (doc._conflicts) { emit(doc._conflicts, doc._id); } " +
                        "}",
                },
            },
        };
        return this.db.saveDatabaseIndex(designDoc);
    };
    ConflictResolutionListComponent.ɵfac = function ConflictResolutionListComponent_Factory(t) { return new (t || ConflictResolutionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_database_database__WEBPACK_IMPORTED_MODULE_3__["Database"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_entity_schema_entity_schema_service__WEBPACK_IMPORTED_MODULE_4__["EntitySchemaService"], 8)); };
    ConflictResolutionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConflictResolutionListComponent, selectors: [["app-conflict-resolution-list"]], viewQuery: function ConflictResolutionListComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        } }, decls: 15, vars: 9, consts: [[1, "mat-elevation-z8"], [4, "ngIf"], ["mat-table", "", "matSort", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "data", 1, "col-data"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "table-list-item", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mode", "indeterminate"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "rev", "doc", 4, "ngFor", "ngForOf"], [3, "rev", "doc"], ["mat-header-row", ""], ["mat-row", "", 1, "table-list-item"]], template: function ConflictResolutionListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "conflicts to resolve:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConflictResolutionListComponent_div_3_Template, 2, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConflictResolutionListComponent_th_7_Template, 2, 0, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConflictResolutionListComponent_td_8_Template, 2, 1, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConflictResolutionListComponent_th_10_Template, 2, 0, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConflictResolutionListComponent_td_11_Template, 2, 1, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ConflictResolutionListComponent_tr_12_Template, 1, 0, "tr", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConflictResolutionListComponent_tr_13_Template, 1, 0, "tr", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-paginator", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.dataSource == null ? null : ctx.dataSource.loading$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("pageSize", 10);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _compare_rev_compare_rev_component__WEBPACK_IMPORTED_MODULE_9__["CompareRevComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".col-data[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25kYi1jb3JlL25kYi1jb3JlL3NyYy9hcHAvY29uZmxpY3QtcmVzb2x1dGlvbi9jb25mbGljdC1yZXNvbHV0aW9uLWxpc3QvY29uZmxpY3QtcmVzb2x1dGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb25mbGljdC1yZXNvbHV0aW9uL2NvbmZsaWN0LXJlc29sdXRpb24tbGlzdC9jb25mbGljdC1yZXNvbHV0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb25mbGljdC1yZXNvbHV0aW9uL2NvbmZsaWN0LXJlc29sdXRpb24tbGlzdC9jb25mbGljdC1yZXNvbHV0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb2wtZGF0YSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiLmNvbC1kYXRhIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
    return ConflictResolutionListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConflictResolutionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-conflict-resolution-list",
                templateUrl: "./conflict-resolution-list.component.html",
                styleUrls: ["./conflict-resolution-list.component.scss"],
            }]
    }], function () { return [{ type: _core_database_database__WEBPACK_IMPORTED_MODULE_3__["Database"] }, { type: _core_entity_schema_entity_schema_service__WEBPACK_IMPORTED_MODULE_4__["EntitySchemaService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/conflict-resolution/conflict-resolution-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/conflict-resolution/conflict-resolution-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ConflictResolutionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConflictResolutionRoutingModule", function() { return ConflictResolutionRoutingModule; });
/* harmony import */ var _conflict_resolution_list_conflict_resolution_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conflict-resolution-list/conflict-resolution-list.component */ "./src/app/conflict-resolution/conflict-resolution-list/conflict-resolution-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





/**
 * Internal routes of the lazy-loaded ConflictResolutionModule.
 * These are relative to the route the module is loaded at in the main app.
 */
var routes = [
    {
        path: "",
        component: _conflict_resolution_list_conflict_resolution_list_component__WEBPACK_IMPORTED_MODULE_0__["ConflictResolutionListComponent"],
    },
];
/**
 * Routing Module for the lazy-loaded {@link ConflictResolutionModule}.
 */
var ConflictResolutionRoutingModule = /** @class */ (function () {
    function ConflictResolutionRoutingModule() {
    }
    ConflictResolutionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ConflictResolutionRoutingModule });
    ConflictResolutionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ConflictResolutionRoutingModule_Factory(t) { return new (t || ConflictResolutionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ConflictResolutionRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConflictResolutionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ConflictResolutionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/conflict-resolution/conflict-resolution.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/conflict-resolution/conflict-resolution.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConflictResolutionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConflictResolutionModule", function() { return ConflictResolutionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _conflict_resolution_list_conflict_resolution_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conflict-resolution-list/conflict-resolution-list.component */ "./src/app/conflict-resolution/conflict-resolution-list/conflict-resolution-list.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm5/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm5/sort.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm5/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm5/button.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm5/paginator.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm5/expansion.js");
/* harmony import */ var _compare_rev_compare_rev_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./compare-rev/compare-rev.component */ "./src/app/conflict-resolution/compare-rev/compare-rev.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm5/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm5/tooltip.js");
/* harmony import */ var _conflict_resolution_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conflict-resolution-routing.module */ "./src/app/conflict-resolution/conflict-resolution-routing.module.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/fesm5/progress-bar.js");

















/**
 * Display and resolve document conflicts in the database through a simple user interface for administrators.
 *
 * You can register additional custom strategies to auto-resolve conflicts
 * by implementing {@link ConflictResolutionStrategy}
 * and registering your implementation as a provider in your Module:
 * `{ provide: CONFLICT_RESOLUTION_STRATEGY, useClass: MyConflictResolutionStrategy, multi: true }`
 *
 * Import this as a "lazy-loaded" module in your main routing:
 * @example
routes: Routes = [
  {
    path: "admin/conflicts",
    canActivate: [AdminGuard],
    loadChildren: () =>
      import("./conflict-resolution/conflict-resolution.module").then(
        (m) => m.ConflictResolutionModule
      ),
  }
];
 */
var ConflictResolutionModule = /** @class */ (function () {
    function ConflictResolutionModule() {
    }
    ConflictResolutionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConflictResolutionModule });
    ConflictResolutionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConflictResolutionModule_Factory(t) { return new (t || ConflictResolutionModule)(); }, imports: [[
                _conflict_resolution_routing_module__WEBPACK_IMPORTED_MODULE_14__["ConflictResolutionRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
            ]] });
    return ConflictResolutionModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConflictResolutionModule, { declarations: [_conflict_resolution_list_conflict_resolution_list_component__WEBPACK_IMPORTED_MODULE_2__["ConflictResolutionListComponent"], _compare_rev_compare_rev_component__WEBPACK_IMPORTED_MODULE_9__["CompareRevComponent"]], imports: [_conflict_resolution_routing_module__WEBPACK_IMPORTED_MODULE_14__["ConflictResolutionRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConflictResolutionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _conflict_resolution_routing_module__WEBPACK_IMPORTED_MODULE_14__["ConflictResolutionRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                ],
                declarations: [_conflict_resolution_list_conflict_resolution_list_component__WEBPACK_IMPORTED_MODULE_2__["ConflictResolutionListComponent"], _compare_rev_compare_rev_component__WEBPACK_IMPORTED_MODULE_9__["CompareRevComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/database/query-data-source.ts":
/*!****************************************************!*\
  !*** ./src/app/core/database/query-data-source.ts ***!
  \****************************************************/
/*! exports provided: QueryDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDataSource", function() { return QueryDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/**
 * Implementation of a datasource that directly queries an index on the {@link Database}
 * supporting optional pagination to only load a subset of the data as required by a paginator.
 *
 * An instance of QueryDataSource can be created and used as source for a mat-table component.
 *
 * also see https://material.angular.io/cdk/table/overview#connecting-the-table-to-a-data-source
 * and https://medium.com/angular-in-depth/angular-material-pagination-datasource-73080d3457fe
 */
var QueryDataSource = /** @class */ (function () {
    function QueryDataSource(database, queryName) {
        this.database = database;
        this.queryName = queryName;
        /** internal observable to emit new result data. This is provided to users calling .connect() */
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        /** internal observable to emit new loading status. This is provided to users through the public .loading$ */
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        /** Indicates whether the datasource is currently loading new data */
        this.loading$ = this.loadingSubject.asObservable();
    }
    Object.defineProperty(QueryDataSource.prototype, "paginator", {
        get: function () {
            return this._paginator;
        },
        set: function (value) {
            var _this = this;
            this._paginator = value;
            if (this.paginator) {
                this.paginator.page.subscribe(function () { return _this.loadData(); });
                this.loadData();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Connect to the datasource and receive an observable to subscribe to loaded data.
     * Whenever pagination is changed this will emit new datasets.
     * @param collectionViewer (not necessary)
     */
    QueryDataSource.prototype.connect = function (collectionViewer) {
        this.loadData();
        return this.dataSubject.asObservable();
    };
    /**
     * Disconnect and discard open observables for this datasource.
     * @param collectionViewer (not necessary)
     */
    QueryDataSource.prototype.disconnect = function (collectionViewer) {
        this.dataSubject.complete();
        this.loadingSubject.complete();
    };
    /**
     * (re)load data from the database for the given query and (if set) to current pagination values.
     */
    QueryDataSource.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingSubject.next(true);
                        options = {
                            include_docs: true,
                        };
                        if (this.paginator) {
                            options.limit = this.paginator.pageSize;
                            options.skip = this.paginator.pageIndex * this.paginator.pageSize;
                        }
                        return [4 /*yield*/, this.database.query(this.queryName, options)];
                    case 1:
                        results = _a.sent();
                        this.paginator.length = results.total_rows;
                        this.dataSubject.next(results.rows);
                        this.loadingSubject.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    return QueryDataSource;
}());



/***/ })

}]);
//# sourceMappingURL=conflict-resolution-conflict-resolution-module.js.map