(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home-layout.component */ "./src/app/home/home-layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





var routes = [
    {
        path: '', component: _home_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"large\" color=\"#fff\" type=\"pacman\">\r\n    <br/><br/>\r\n    <p style=\"font-size: 20px; color: white; font-weight: bolder\">Carregando...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dialog_confirm_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog-confirm/dialog-confirm.component */ "./src/app/dialog-confirm/dialog-confirm.component.ts");
/* harmony import */ var _dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog-match/dialog-match.component */ "./src/app/dialog-match/dialog-match.component.ts");
/* harmony import */ var _home_globals_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/globals.util */ "./src/app/home/globals.util.ts");
/* harmony import */ var _home_home_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home-layout.component */ "./src/app/home/home-layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _my_date_adapter_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-date-adapter.util */ "./src/app/my-date-adapter.util.ts");
/* harmony import */ var _my_hammer_config_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./my-hammer-config.util */ "./src/app/my-hammer-config.util.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



















var MY_DATE_FORMATS = {
    parse: {
        dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { month: 'numeric', year: 'numeric' },
        dateA11yLabel: { day: 'numeric', month: 'long', year: 'numeric' },
        monthYearA11yLabel: { month: 'long', year: 'numeric' },
    },
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _home_home_layout_component__WEBPACK_IMPORTED_MODULE_14__["HomeLayoutComponent"], _dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_12__["DialogMatchComponent"], _dialog_confirm_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_11__["DialogConfirmComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"]
            ],
            providers: [
                _home_globals_util__WEBPACK_IMPORTED_MODULE_13__["Globals"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _my_date_adapter_util__WEBPACK_IMPORTED_MODULE_16__["MyDateAdapter"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_DATE_FORMATS },
                { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["HAMMER_GESTURE_CONFIG"], useClass: _my_hammer_config_util__WEBPACK_IMPORTED_MODULE_17__["MyHammerConfig"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_12__["DialogMatchComponent"], _dialog_confirm_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_11__["DialogConfirmComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog-confirm/dialog-confirm.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dialog-confirm/dialog-confirm.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"mat-body-1\">Deseja realmente remover esta partida?</label>\n<div class=\"m-margin-top\" style=\"text-align: center\">\n  <button mat-raised-button (click)=\"backClick()\">VOLTAR</button>\n  <button style=\"margin-left: 10px\" (click)=\"confirmDelete()\" mat-raised-button color=\"warn\">REMOVER</button>\n</div>\n"

/***/ }),

/***/ "./src/app/dialog-confirm/dialog-confirm.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dialog-confirm/dialog-confirm.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-margin-top {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLWNvbmZpcm0vRDpcXE1ldXNEb2N1bWVudG9zXFxQcm9qZXRvc1xcc2tpbnRvL3NyY1xcYXBwXFxkaWFsb2ctY29uZmlybVxcZGlhbG9nLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9nLWNvbmZpcm0vZGlhbG9nLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS1tYXJnaW4tdG9wIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dialog-confirm/dialog-confirm.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialog-confirm/dialog-confirm.component.ts ***!
  \************************************************************/
/*! exports provided: DialogConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogConfirmComponent", function() { return DialogConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogConfirmComponent = /** @class */ (function () {
    function DialogConfirmComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.matchDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DialogConfirmComponent.prototype.ngOnInit = function () {
    };
    DialogConfirmComponent.prototype.backClick = function () {
        this.dialogRef.close();
    };
    DialogConfirmComponent.prototype.confirmDelete = function () {
        this.matchDeleted.emit();
    };
    DialogConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-confirm',
            template: __webpack_require__(/*! ./dialog-confirm.component.html */ "./src/app/dialog-confirm/dialog-confirm.component.html"),
            styles: [__webpack_require__(/*! ./dialog-confirm.component.scss */ "./src/app/dialog-confirm/dialog-confirm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DialogConfirmComponent);
    return DialogConfirmComponent;
}());



/***/ }),

/***/ "./src/app/dialog-match/dialog-match.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dialog-match/dialog-match.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n    <form [formGroup]=\"matchForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div>\r\n            <mat-form-field>\r\n                <mat-select formControlName=\"player\" placeholder=\"Jogador\">\r\n                    <mat-option value=\"Augusto\">Augusto</mat-option>\r\n                    <mat-option value=\"Alexandre\">Alexandre</mat-option>\r\n                    <mat-option value=\"André\">André</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div>\r\n            <mat-form-field>\r\n                <input type=\"text\" formControlName=\"champion\" matInput placeholder=\"Campeão\" [matAutocomplete]=\"auto\" />\r\n                <mat-autocomplete #auto=\"matAutocomplete\">\r\n                    <mat-option *ngFor=\"let champion of filteredChampionList | async\" [value]=\"champion\">\r\n                        {{champion}}\r\n                    </mat-option>\r\n                </mat-autocomplete>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"m-margin-top\">\r\n            <mat-form-field>\r\n                <input [value]=\"date.value\" matInput [matDatepicker]=\"picker\" placeholder=\"Escolha uma data\" (dateChange)=\"dateChanged($event)\" />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"m-margin-top\" style=\"text-align: center\">\r\n            <mat-radio-group formControlName=\"result\">\r\n                <mat-radio-button value=\"true\">Vitória</mat-radio-button>\r\n                <mat-radio-button style=\"margin-left: 10px\" value=\"false\">Derrota</mat-radio-button>\r\n            </mat-radio-group>\r\n        </div>\r\n\r\n        <div class=\"m-margin-top\" style=\"text-align: center\">\r\n            <mat-checkbox formControlName=\"perfect\">KDA Perfeito</mat-checkbox>\r\n        </div>\r\n\r\n        <div class=\"m-margin-top-large\" style=\"text-align: center\">\r\n            <button mat-raised-button (click)=\"backClick()\">VOLTAR</button>\r\n            <button style=\"margin-left: 10px\" type=\"submit\" mat-raised-button color=\"primary\">ADICIONAR</button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog-match/dialog-match.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dialog-match/dialog-match.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-margin-top {\n  margin-top: 20px; }\n\n.m-margin-top-large {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLW1hdGNoL0Q6XFxNZXVzRG9jdW1lbnRvc1xcUHJvamV0b3NcXHNraW50by9zcmNcXGFwcFxcZGlhbG9nLW1hdGNoXFxkaWFsb2ctbWF0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFDRixFQUFBOztBQUVBO0VBQ0UsZ0JBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1tYXRjaC9kaWFsb2ctbWF0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS1tYXJnaW4tdG9wIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4XHJcbn1cclxuXHJcbi5tLW1hcmdpbi10b3AtbGFyZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDQwcHhcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dialog-match/dialog-match.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dialog-match/dialog-match.component.ts ***!
  \********************************************************/
/*! exports provided: DialogMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMatchComponent", function() { return DialogMatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb-stitch-browser-sdk */ "./node_modules/mongodb-stitch-browser-sdk/dist/esm/index.js");
/* harmony import */ var _home_globals_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/globals.util */ "./src/app/home/globals.util.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var DialogMatchComponent = /** @class */ (function () {
    function DialogMatchComponent(dialogRef, snackBar, globals, http) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.globals = globals;
        this.http = http;
        this.matchAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lastDateChangedInMillis = new Date().getTime();
        this.championControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.matchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            player: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Augusto', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            result: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('true', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            champion: this.championControl,
            perfect: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            date: this.date
        });
    }
    DialogMatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get('../../assets/json/champion.json')
            .subscribe(function (data) {
            _this.championList = Object.keys(data.data);
            _this.filteredChampionList = _this.championControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return _this._filter(value); }));
        });
    };
    DialogMatchComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.championList.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
        });
    };
    DialogMatchComponent.prototype.backClick = function () {
        this.dialogRef.close();
    };
    DialogMatchComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.matchForm.valid) {
            var matchToPost_1 = this.matchForm.value;
            matchToPost_1.date = this.lastDateChangedInMillis; // Passa para millis
            this.client = mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__["Stitch"].getAppClient(this.globals.atlasClientIpId);
            this.db = this.client
                .getServiceClient(mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__["RemoteMongoClient"].factory, this.globals.atlasServiceName)
                .db(this.globals.atlasDb);
            if (this.client && this.db) {
                this.client.auth
                    .loginWithCredential(new mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_4__["AnonymousCredential"]())
                    .then(function () { return _this.db.collection('historical').insertOne(matchToPost_1); })
                    .then(function (result) {
                    if (result.insertedId) {
                        _this.snackBar.open('Partida adicionada com sucesso.', 'Pronto!', {
                            duration: 3000
                        });
                        _this.matchAdded.emit();
                        _this.dialogRef.close();
                    }
                    else {
                        _this.snackBar.open('Falha salvar dados no banco, tente novamente.', 'Ops!');
                    }
                })
                    .catch(function (err) {
                    _this.snackBar.open('Falha no envio de dados.', 'Erro.');
                    console.error('ERRO AO ADICIONAR REGISTRO.', err);
                });
            }
            else {
                this.snackBar.open('Comunicação com o CloudBD indisponível no momento. Recarregue a página ou tente mais tarde.', 'Ops!', {
                    duration: 6000
                });
                this.dialogRef.close();
            }
        }
    };
    DialogMatchComponent.prototype.dateChanged = function (event) {
        this.lastDateChangedInMillis = event.target.value.getTime();
        var dateNow = new Date(); // Para adicionar horas, minutos e segundos ao milli da data.
        this.lastDateChangedInMillis += this.milisecondsFromHourMinutesAndSeconds(dateNow.getHours(), dateNow.getMinutes(), dateNow.getSeconds());
    };
    DialogMatchComponent.prototype.milisecondsFromHourMinutesAndSeconds = function (hrs, min, sec) {
        return (hrs * 60 * 60 + min * 60 + sec) * 1000;
    };
    DialogMatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-match',
            template: __webpack_require__(/*! ./dialog-match.component.html */ "./src/app/dialog-match/dialog-match.component.html"),
            styles: [__webpack_require__(/*! ./dialog-match.component.scss */ "./src/app/dialog-match/dialog-match.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _home_globals_util__WEBPACK_IMPORTED_MODULE_5__["Globals"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], DialogMatchComponent);
    return DialogMatchComponent;
}());



/***/ }),

/***/ "./src/app/home/globals.util.ts":
/*!**************************************!*\
  !*** ./src/app/home/globals.util.ts ***!
  \**************************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Globals = /** @class */ (function () {
    function Globals() {
        this.atlasServiceName = 'mongodb-atlas-skinto';
        this.atlasClientIpId = 'skinto-irfcd';
        this.atlasDb = 'skinto';
    }
    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/home/home-layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/home-layout.component.ts ***!
  \***********************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent() {
    }
    HomeLayoutComponent.prototype.ngOnInit = function () { };
    HomeLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-layout',
            template: "\n    <router-outlet></router-outlet>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"getWinnerClassName()\">\r\n    <mat-tab-group mat-align-tabs=\"center\">\r\n        <mat-tab>\r\n            <ng-template mat-tab-label>\r\n                <mat-icon class=\"icon-margin\">star</mat-icon>\r\n                STATUS\r\n            </ng-template>\r\n            <div class=\"content-tab\" style=\"margin-top: 20px\">\r\n                <ng-container *ngIf=\"ranking && ranking.length > 0\">\r\n                    <mat-grid-list cols=\"4\" rowHeight=\"200px\">\r\n                        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\r\n                            <div class=\"container\">\r\n                                <img src=\"../../assets/img/first_molding.png\" style=\"max-height: 200px\" />\r\n                                <div class=\"centered\">\r\n                                    <div>{{ ranking[0].name.toUpperCase() }}</div>\r\n                                    <div>{{ ranking[0].score }} PONTOS</div>\r\n                                    <img class=\"blink-effect\" *ngIf=\"ranking[0].name === playerOnHotStreak\" src=\"../../assets/img/hotstreak.png\" style=\"max-height: 40px\" />\r\n                                </div>\r\n                            </div>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" style=\"margin-top: 10px\">\r\n                            <div class=\"container\">\r\n                                <img src=\"../../assets/img/second_molding.png\" style=\"max-height: 200px\" />\r\n                                <div class=\"centered\">\r\n                                    <div>{{ ranking[1].name.toUpperCase() }}</div>\r\n                                    <div>{{ ranking[1].score }} PONTOS</div>\r\n                                    <img class=\"blink-effect\" *ngIf=\"ranking[1].name === playerOnHotStreak\" src=\"../../assets/img/hotstreak.png\" style=\"max-height: 40px\" />\r\n                                </div>\r\n                            </div>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" style=\"margin-top: 10px\">\r\n                            <div class=\"container\">\r\n                                <img src=\"../../assets/img/third_molding.png\" style=\"max-height: 200px\" />\r\n                                <div class=\"centered\">\r\n                                    <div>{{ ranking[2].name.toUpperCase() }}</div>\r\n                                    <div>{{ ranking[2].score }} PONTOS</div>\r\n                                    <img class=\"blink-effect\" *ngIf=\"ranking[2].name === playerOnHotStreak\" src=\"../../assets/img/hotstreak.png\" style=\"max-height: 40px\" />\r\n                                </div>\r\n                            </div>\r\n                        </mat-grid-tile>\r\n                    </mat-grid-list>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"!ranking || ranking.length === 0\">\r\n                    <div class=\"content-tab\">\r\n                        <div style=\"background-color: rgba(0,0,0, 0.7)\" class=\"mat-h2 mat-title\">POR ENQUANTO NÃO EXISTEM DADOS PARA SEREM ANALISADOS</div>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab>\r\n            <ng-template mat-tab-label>\r\n                <mat-icon class=\"icon-margin\">query_builder</mat-icon>\r\n                HISTÓRICO\r\n            </ng-template>\r\n            <div class=\"content-tab\">\r\n                <mat-table [dataSource]=\"matchs\" class=\"mat-elevation-z8\">\r\n                    <ng-container matColumnDef=\"player\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>JOGADOR</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let match\">{{ match.player }}</mat-cell>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"champion\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>CAMPEÃO</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let match\">{{ match.champion }}</mat-cell>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"date\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>DATA</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let match\">{{ match.date | date: 'dd/MM/yyyy' }}</mat-cell>\r\n                    </ng-container>\r\n\r\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                    <mat-row [ngStyle]=\"{ cursor: cursorStyle }\" (mouseenter)=\"changeCursorStyle($event)\" (mouseleave)=\"changeCursorStyle($event)\" (click)=\"deleteMatch(match)\" *matRowDef=\"let match; columns: displayedColumns\" [ngClass]=\"paintRow(match)\"></mat-row>\r\n                </mat-table>\r\n            </div>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n\r\n    <!-- Fab Button -->\r\n    <div class=\"fab-button\">\r\n        <button mat-fab color=\"warn\" (click)=\"openDialogToCreateNewMatch()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n    </div>\r\n</div>\r\n<!--ng-container-->"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-cell,\nmat-cell {\n  justify-content: center;\n  border-bottom-width: 1px;\n  border-bottom-style: groove;\n  border-bottom-color: rgba(255, 255, 255, 0.274); }\n\nmat-table {\n  overflow-x: auto;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.outer {\n  display: table;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.mat-title {\n  text-decoration: underline; }\n\n.mat-card.first-place {\n  border: 6px solid #ffee00;\n  border-radius: 5px;\n  text-shadow: 1px 1px #ffee00; }\n\n.mat-card.second-place {\n  border: 6px solid #b1b1b1;\n  border-radius: 5px;\n  text-shadow: 1px 1px gray; }\n\n.mat-card.third-place {\n  border: 6px solid #7a3700;\n  border-radius: 5px;\n  text-shadow: 1px 1px rgba(122, 55, 0, 0.5); }\n\n.mat-row,\n.mat-header-row {\n  border-bottom-width: 0px; }\n\n.victory {\n  background-color: rgba(21, 255, 0, 0.425); }\n\n.victory-perfect {\n  background-color: rgba(21, 255, 0, 0.425);\n  border-style: solid;\n  border-width: 3px;\n  border-color: gold; }\n\n.defeat {\n  background-color: rgba(255, 17, 0, 0.425); }\n\n.defeat-perfect {\n  background-color: rgba(255, 17, 0, 0.425);\n  border-style: solid;\n  border-width: 3px;\n  border-color: gold; }\n\n.icon-margin {\n  margin-right: 8px; }\n\n.augusto-winning {\n  background: url('champion_augusto.9c8be7aeef4a367ef0c7.jpg') repeat;\n  background-position: 52% 20%; }\n\n.andre-winning {\n  background: url('champion_andre.3a802e127d0eee77cb36.jpg') repeat center top; }\n\n.alexandre-winning {\n  background: url('champion_alexandre.cd150be0e945b934768d.jpg') repeat center top; }\n\n.mat-card {\n  background: rgba(255, 255, 255, 0.8); }\n\n.content-tab {\n  height: 100vh;\n  color: white;\n  text-align: center;\n  padding: 3%; }\n\n.fab-button {\n  z-index: 5;\n  position: fixed;\n  display: flex;\n  align-self: flex-end;\n  bottom: 0;\n  right: 0;\n  margin-bottom: 5%;\n  margin-right: 5%; }\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1; }\n  25% {\n    opacity: 0.75; }\n  50% {\n    opacity: 0.5; }\n  75% {\n    opacity: 0.75; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blink {\n  0% {\n    opacity: 1; }\n  25% {\n    opacity: 0.75; }\n  50% {\n    opacity: 0.5; }\n  75% {\n    opacity: 0.75; }\n  100% {\n    opacity: 1; } }\n\n.blink-effect {\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n.container {\n  text-align: center;\n  color: white; }\n\n.centered {\n  position: absolute;\n  top: 38%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTWV1c0RvY3VtZW50b3NcXFByb2pldG9zXFxza2ludG8vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsK0NBQStDLEVBQUE7O0FBR25EO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTyxFQUFBOztBQUdYO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0kseUJBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQiw0QkFBcUMsRUFBQTs7QUFHekM7RUFDSSx5QkFBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHlCQUF1QyxFQUFBOztBQUczQztFQUNJLHlCQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsMENBQTBDLEVBQUE7O0FBRzlDOztFQUVJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLHlDQUF5QyxFQUFBOztBQUc3QztFQUNJLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlDQUF5QyxFQUFBOztBQUc3QztFQUNJLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG1FQUErRDtFQUMvRCw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSw0RUFBd0UsRUFBQTs7QUFHNUU7RUFDSSxnRkFBNEUsRUFBQTs7QUFHaEY7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsU0FBUztFQUNULFFBQVE7RUFDUixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLGFBQWEsRUFBQTtFQUVqQjtJQUNJLFlBQVksRUFBQTtFQUVoQjtJQUNJLGFBQWEsRUFBQTtFQUVqQjtJQUNJLFVBQVUsRUFBQSxFQUFBOztBQWRsQjtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxhQUFhLEVBQUE7RUFFakI7SUFDSSxZQUFZLEVBQUE7RUFFaEI7SUFDSSxhQUFhLEVBQUE7RUFFakI7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSSwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDJDQUFtQztVQUFuQyxtQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1oZWFkZXItY2VsbCxcclxubWF0LWNlbGwge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBncm9vdmU7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjc0KTtcclxufVxyXG5cclxubWF0LXRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ub3V0ZXIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ubWF0LXRpdGxlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubWF0LWNhcmQuZmlyc3QtcGxhY2Uge1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDI1NSwgMjM4LCAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHJnYigyNTUsIDIzOCwgMCk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC5zZWNvbmQtcGxhY2Uge1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDE3NywgMTc3LCAxNzcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG59XHJcblxyXG4ubWF0LWNhcmQudGhpcmQtcGxhY2Uge1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDEyMiwgNTUsIDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiYSgxMjIsIDU1LCAwLCAwLjUpO1xyXG59XHJcblxyXG4ubWF0LXJvdyxcclxuLm1hdC1oZWFkZXItcm93IHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcclxufVxyXG5cclxuLnZpY3Rvcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjU1LCAwLCAwLjQyNSk7XHJcbn1cclxuXHJcbi52aWN0b3J5LXBlcmZlY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjU1LCAwLCAwLjQyNSk7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGdvbGQ7XHJcbn1cclxuXHJcbi5kZWZlYXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE3LCAwLCAwLjQyNSk7XHJcbn1cclxuXHJcbi5kZWZlYXQtcGVyZmVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTcsIDAsIDAuNDI1KTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDNweDtcclxuICAgIGJvcmRlci1jb2xvcjogZ29sZDtcclxufVxyXG5cclxuLmljb24tbWFyZ2luIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uYXVndXN0by13aW5uaW5nIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9jaGFtcGlvbl9hdWd1c3RvLmpwZycpIHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUyJSAyMCU7XHJcbn1cclxuXHJcbi5hbmRyZS13aW5uaW5nIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9jaGFtcGlvbl9hbmRyZS5qcGcnKSByZXBlYXQgY2VudGVyIHRvcDtcclxufVxyXG5cclxuLmFsZXhhbmRyZS13aW5uaW5nIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9jaGFtcGlvbl9hbGV4YW5kcmUuanBnJykgcmVwZWF0IGNlbnRlciB0b3A7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn1cclxuXHJcbi5jb250ZW50LXRhYiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5mYWItYnV0dG9uIHtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDI1JSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43NTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgNzUlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuLmJsaW5rLWVmZmVjdCB7XHJcbiAgICBhbmltYXRpb246IGJsaW5rIDFzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzOCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb-stitch-browser-sdk */ "./node_modules/mongodb-stitch-browser-sdk/dist/esm/index.js");
/* harmony import */ var _globals_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globals.util */ "./src/app/home/globals.util.ts");
/* harmony import */ var _dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog-match/dialog-match.component */ "./src/app/dialog-match/dialog-match.component.ts");
/* harmony import */ var _dialog_confirm_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog-confirm/dialog-confirm.component */ "./src/app/dialog-confirm/dialog-confirm.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(matchDialog, snackBar, globals, spinner) {
        this.matchDialog = matchDialog;
        this.snackBar = snackBar;
        this.globals = globals;
        this.spinner = spinner;
        this.displayedColumns = ['player', 'champion', 'date'];
        this.playerOnHotStreak = null;
        this.cursorStyle = 'default';
        this.ranking = [
            {
                name: 'Augusto',
                score: 0
            },
            {
                name: 'Alexandre',
                score: 0
            },
            {
                name: 'André',
                score: 0
            }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.client = mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__["Stitch"].initializeDefaultAppClient(this.globals.atlasClientIpId);
        this.db = this.client
            .getServiceClient(mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__["RemoteMongoClient"].factory, this.globals.atlasServiceName)
            .db(this.globals.atlasDb);
        this.updateAtFixTime();
    };
    HomeComponent.prototype.ngOnChanges = function () {
        if (this.client && this.db) {
            this.updateMatchsAndRanking();
        }
    };
    HomeComponent.prototype.updateMatchsAndRanking = function () {
        var _this = this;
        this.client.auth
            .loginWithCredential(new mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__["AnonymousCredential"]())
            .then(function () {
            return _this.db
                .collection('historical')
                .aggregate([{ $sort: { date: -1 } }])
                .asArray();
        })
            .then(function (docs) {
            _this.matchs = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](docs);
            _this.updateRanking();
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    HomeComponent.prototype.getDateFromLong = function (dateLong) {
        var dateString = new Date(dateLong).getDate().toLocaleString();
        console.log(dateString);
        return dateString;
    };
    HomeComponent.prototype.updateRanking = function () {
        var _this = this;
        // Limpa score
        this.ranking[0].score = 0;
        this.ranking[1].score = 0;
        this.ranking[2].score = 0;
        var firstThreeRegisters = 0;
        var lastPlayer = this.matchs.data[0].player;
        var streakCount = 0;
        var streakPlayer = this.matchs.data[0].player;
        this.matchs.data.forEach(function (element) {
            // Atualiza jogador em Hot Streak
            if (firstThreeRegisters < 3) {
                firstThreeRegisters++;
                if (lastPlayer === element.player) {
                    streakCount++;
                }
                else {
                    streakCount = 0;
                }
                lastPlayer = element.player;
            }
            // Atualiza ranking
            switch (element.player) {
                case _this.ranking[0].name:
                    _this.ranking[0].score++;
                    break;
                case _this.ranking[1].name:
                    _this.ranking[1].score++;
                    break;
                case _this.ranking[2].name:
                    _this.ranking[2].score++;
                    break;
            }
        });
        // Caso tenha havido um hot streak
        // atualiza o mesmo na interface.
        if (streakCount > 2) {
            this.playerOnHotStreak = streakPlayer;
        }
        else {
            this.playerOnHotStreak = null;
        }
        this.ranking.sort(this.sortByScore);
    };
    HomeComponent.prototype.sortByScore = function (a, b) {
        if (a.score < b.score) {
            return 1;
        }
        if (a.score > b.score) {
            return -1;
        }
        return 0;
    };
    HomeComponent.prototype.getWinnerClassName = function () {
        if (this.ranking && this.ranking.length > 0) {
            return this.ranking[0].name.toLowerCase() + '-winning';
        }
    };
    HomeComponent.prototype.openDialogToCreateNewMatch = function () {
        var _this = this;
        var dialogRef = this.matchDialog.open(_dialog_match_dialog_match_component__WEBPACK_IMPORTED_MODULE_5__["DialogMatchComponent"], {
            width: '250px',
            data: { successOperationDone: true }
        });
        dialogRef.componentInstance.matchAdded.subscribe(function () {
            _this.updateMatchsAndRanking();
        });
    };
    HomeComponent.prototype.openDialogToDeleteMatch = function (match) {
        var _this = this;
        var dialogRef = this.matchDialog.open(_dialog_confirm_dialog_confirm_component__WEBPACK_IMPORTED_MODULE_6__["DialogConfirmComponent"], {
            width: '250px'
        });
        dialogRef.componentInstance.matchDeleted.subscribe(function () {
            _this.client.auth.loginWithCredential(new mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__["AnonymousCredential"]()).then(function () {
                return _this.db
                    .collection('historical')
                    .deleteOne({ _id: match._id })
                    .then(function (res) {
                    if (res.deletedCount > 0) {
                        _this.updateMatchsAndRanking();
                        _this.snackBar.open('Partida removida com sucesso.', 'Pronto!', {
                            duration: 3000
                        });
                        dialogRef.close();
                    }
                    else {
                        _this.updateMatchsAndRanking();
                        _this.snackBar.open('Partida não encontrada.', 'Ops!', {
                            duration: 3000
                        });
                    }
                });
            });
        });
    };
    HomeComponent.prototype.updateAtFixTime = function () {
        var _this = this;
        this.client.auth
            .loginWithCredential(new mongodb_stitch_browser_sdk__WEBPACK_IMPORTED_MODULE_3__["AnonymousCredential"]())
            .then(function () {
            return _this.db
                .collection('historical')
                .aggregate([{ $sort: { date: -1 } }])
                .asArray();
        })
            .then(function (docs) {
            _this.matchs = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](docs);
            _this.updateRanking();
        })
            .catch(function (err) {
            console.error(err);
        })
            .finally(function () {
            _this.spinner.hide();
            setTimeout(function () { return _this.updateAtFixTime(); }, 5000);
        });
    };
    HomeComponent.prototype.deleteMatch = function (matchToDelete) {
        this.openDialogToDeleteMatch(matchToDelete);
    };
    HomeComponent.prototype.changeCursorStyle = function ($event) {
        this.cursorStyle = $event.type === 'mouseenter' ? 'pointer' : 'default';
    };
    HomeComponent.prototype.paintRow = function (match) {
        return {
            victory: (match.result || match.result === 'true') && !match.perfect,
            'victory-perfect': (match.result || match.result === 'true') && match.perfect,
            defeat: (!match.result || match.result === 'false') && !match.perfect,
            'defeat-perfect': (!match.result || match.result === 'false') && match.perfect,
        };
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _globals_util__WEBPACK_IMPORTED_MODULE_4__["Globals"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/my-date-adapter.util.ts":
/*!*****************************************!*\
  !*** ./src/app/my-date-adapter.util.ts ***!
  \*****************************************/
/*! exports provided: MyDateAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDateAdapter", function() { return MyDateAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


var MyDateAdapter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyDateAdapter, _super);
    function MyDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return day + "/" + month + "/" + year;
        }
        else {
            return date.toDateString();
        }
    };
    MyDateAdapter.prototype.getDayOfWeekNames = function (style) {
        var SHORT_NAMES = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        return SHORT_NAMES;
    };
    MyDateAdapter.prototype.getFirstDayOfWeek = function () {
        return 1;
    };
    return MyDateAdapter;
}(_angular_material__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]));



/***/ }),

/***/ "./src/app/my-hammer-config.util.ts":
/*!******************************************!*\
  !*** ./src/app/my-hammer-config.util.ts ***!
  \******************************************/
/*! exports provided: MyHammerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");


var MyHammerConfig = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'pinch': { enable: false },
            'rotate': { enable: false },
            'tap': { enable: false }
        };
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MeusDocumentos\Projetos\skinto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.09d65306a78e58753d60.js.map