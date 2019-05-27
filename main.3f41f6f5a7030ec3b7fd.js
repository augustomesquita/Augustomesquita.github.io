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

module.exports = "<router-outlet></router-outlet>\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"large\" color=\"#fff\" type=\"pacman\">\n    <br/><br/>\n    <p style=\"font-size: 20px; color: white; font-weight: bolder\">Carregando...</p>\n</ngx-spinner>"

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

module.exports = ".m-margin-top {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F1Z3VzdG8vUHJvamV0b3Mvc2tpbnRvL3NyYy9hcHAvZGlhbG9nLWNvbmZpcm0vZGlhbG9nLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9nLWNvbmZpcm0vZGlhbG9nLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS1tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogMjBweFxufVxuIl19 */"

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

module.exports = "<div class=\"example-container\">\n    <form [formGroup]=\"matchForm\" (ngSubmit)=\"onSubmit()\">\n        <div>\n            <mat-form-field>\n                <mat-select formControlName=\"player\" placeholder=\"Jogador\">\n                    <mat-option value=\"Augusto\">Augusto</mat-option>\n                    <mat-option value=\"Alexandre\">Alexandre</mat-option>\n                    <mat-option value=\"André\">André</mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <div>\n            <mat-form-field>\n                <input type=\"text\" formControlName=\"champion\" matInput placeholder=\"Campeão\" [matAutocomplete]=\"auto\" (keyup)=\"invalidateChampionSelected()\" />\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option (click)=\"championSelection(champion)\" *ngFor=\"let champion of filteredChampionList | async\" [value]=\"champion\">\n                      <div>{{champion}}</div>\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field>\n        </div>\n\n        <div>\n            <mat-form-field>\n                <input [value]=\"date.value\" matInput [matDatepicker]=\"picker\" placeholder=\"Escolha uma data\" (dateChange)=\"dateChanged($event)\" />\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n        </div>\n\n        <div style=\"text-align: center\">\n            <mat-radio-group formControlName=\"result\">\n                <mat-radio-button value=\"true\">Vitória</mat-radio-button>\n                <mat-radio-button style=\"margin-left: 10px\" value=\"false\">Derrota</mat-radio-button>\n            </mat-radio-group>\n        </div>\n\n        <div class=\"m-margin-top\" style=\"text-align: center\">\n            <mat-checkbox formControlName=\"perfect\">KDA Perfeito</mat-checkbox>\n        </div>\n\n        <div class=\"m-margin-top-large\" style=\"text-align: center\">\n            <button type=\"submit\" mat-raised-button color=\"primary\">ADICIONAR</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/dialog-match/dialog-match.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dialog-match/dialog-match.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-margin-top {\n  margin-top: 10px; }\n\n.m-margin-to-small {\n  margin-top: 0px; }\n\n.m-margin-top-large {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F1Z3VzdG8vUHJvamV0b3Mvc2tpbnRvL3NyYy9hcHAvZGlhbG9nLW1hdGNoL2RpYWxvZy1tYXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUNGLEVBQUE7O0FBRUE7RUFDRSxlQUNGLEVBQUE7O0FBRUE7RUFDRSxnQkFDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9nLW1hdGNoL2RpYWxvZy1tYXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tLW1hcmdpbi10b3Age1xuICBtYXJnaW4tdG9wOiAxMHB4XG59XG5cbi5tLW1hcmdpbi10by1zbWFsbCB7XG4gIG1hcmdpbi10b3A6IDBweFxufVxuXG4ubS1tYXJnaW4tdG9wLWxhcmdlIHtcbiAgbWFyZ2luLXRvcDogMjBweFxufVxuIl19 */"

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
        this.championWasSelected = false;
    }
    DialogMatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get('http://ddragon.leagueoflegends.com/cdn/9.10.1/data/pt_BR/champion.json')
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
        if (!this.championWasSelected) {
            this.championControl.patchValue('');
        }
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
    DialogMatchComponent.prototype.championSelection = function (champion) {
        if (champion) {
            this.championWasSelected = true;
        }
    };
    DialogMatchComponent.prototype.invalidateChampionSelected = function () {
        console.log('INVALIDOU');
        this.championWasSelected = false;
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

module.exports = "<div [ngStyle]=\"getLastChampionWinnerBG()\">\n    <mat-tab-group mat-align-tabs=\"center\">\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <mat-icon class=\"icon-margin\">star</mat-icon>\n                STATUS\n            </ng-template>\n            <div class=\"content-tab\" style=\"margin-top: 20px\">\n                <ng-container *ngIf=\"ranking && ranking.length > 0\">\n                    <mat-grid-list cols=\"4\" rowHeight=\"200px\">\n                        <mat-grid-tile [colspan]=\"4\" [rowspan]=\"1\">\n                            <div class=\"container\">\n                                <img src=\"../../assets/img/first_molding.png\" style=\"max-height: 200px\" />\n                                <div class=\"centered\">\n                                    <div>{{ ranking[0].name.toUpperCase() }}</div>\n                                    <div>{{ ranking[0].score }} PONTOS</div>\n                                    <img class=\"blink-effect\" *ngIf=\"ranking[0].name === playerOnHotStreak\" src=\"../../assets/img/hotstreak.png\" style=\"max-height: 40px\" />\n                                </div>\n                            </div>\n                        </mat-grid-tile>\n                        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" style=\"margin-top: 10px\">\n                            <div class=\"container\">\n                                <img src=\"../../assets/img/second_molding.png\" style=\"max-height: 200px\" />\n                                <div class=\"centered\">\n                                    <div>{{ ranking[1].name.toUpperCase() }}</div>\n                                    <div>{{ ranking[1].score }} PONTOS</div>\n                                    <img class=\"blink-effect\" *ngIf=\"ranking[1].name === playerOnHotStreak\" src=\"../../assets/img/hotstreak.png\" style=\"max-height: 40px\" />\n                                </div>\n                            </div>\n                        </mat-grid-tile>\n                        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\" style=\"margin-top: 10px\">\n                            <div class=\"container\">\n                                <img src=\"../../assets/img/third_molding.png\" style=\"max-height: 200px\" />\n                                <div class=\"centered\">\n                                    <div>{{ ranking[2].name.toUpperCase() }}</div>\n                                    <div>{{ ranking[2].score }} PONTOS</div>\n                                    <img class=\"blink-effect\" *ngIf=\"ranking[2].name === playerOnHotStreak\" src=\"../../assets/img/hotstreak.png\" style=\"max-height: 40px\" />\n                                </div>\n                            </div>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                </ng-container>\n\n                <ng-container *ngIf=\"!ranking || ranking.length === 0\">\n                    <div class=\"content-tab\">\n                        <div style=\"background-color: rgba(0,0,0, 0.7)\" class=\"mat-h2 mat-title\">POR ENQUANTO NÃO EXISTEM DADOS PARA SEREM ANALISADOS</div>\n                    </div>\n                </ng-container>\n            </div>\n        </mat-tab>\n\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <mat-icon class=\"icon-margin\">query_builder</mat-icon>\n                HISTÓRICO\n            </ng-template>\n            <div class=\"content-tab\">\n                <mat-table [dataSource]=\"matchs\" class=\"mat-elevation-z8\">\n                    <ng-container matColumnDef=\"player\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>JOGADOR</mat-header-cell>\n                        <mat-cell *matCellDef=\"let match\">{{ match.player }}</mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"champion\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>CAMPEÃO</mat-header-cell>\n                        <mat-cell *matCellDef=\"let match\">{{ match.champion }}</mat-cell>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"date\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header>DATA</mat-header-cell>\n                        <mat-cell *matCellDef=\"let match\">{{ match.date | date: 'dd/MM/yyyy' }}</mat-cell>\n                    </ng-container>\n\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row [ngStyle]=\"{ cursor: cursorStyle }\" (mouseenter)=\"changeCursorStyle($event)\" (mouseleave)=\"changeCursorStyle($event)\" (click)=\"deleteMatch(match)\" *matRowDef=\"let match; columns: displayedColumns\" [ngClass]=\"paintRow(match)\"></mat-row>\n                </mat-table>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n\n    <!-- Fab Button -->\n    <div class=\"fab-button\">\n        <button mat-fab color=\"warn\" (click)=\"openDialogToCreateNewMatch()\">\n      <mat-icon>add</mat-icon>\n    </button>\n    </div>\n</div>\n<!--ng-container-->\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-header-cell,\nmat-cell {\n  justify-content: center;\n  border-bottom-width: 1px;\n  border-bottom-style: groove;\n  border-bottom-color: rgba(255, 255, 255, 0.274); }\n\nmat-table {\n  overflow-x: auto;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.outer {\n  display: table;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.mat-title {\n  text-decoration: underline; }\n\n.mat-card.first-place {\n  border: 6px solid #ffee00;\n  border-radius: 5px;\n  text-shadow: 1px 1px #ffee00; }\n\n.mat-card.second-place {\n  border: 6px solid #b1b1b1;\n  border-radius: 5px;\n  text-shadow: 1px 1px gray; }\n\n.mat-card.third-place {\n  border: 6px solid #7a3700;\n  border-radius: 5px;\n  text-shadow: 1px 1px rgba(122, 55, 0, 0.5); }\n\n.mat-row,\n.mat-header-row {\n  border-bottom-width: 0px; }\n\n.victory {\n  background-color: rgba(21, 255, 0, 0.425); }\n\n.victory-perfect {\n  background-color: rgba(21, 255, 0, 0.425);\n  border-style: solid;\n  border-width: 3px;\n  border-color: gold; }\n\n.defeat {\n  background-color: rgba(255, 17, 0, 0.425); }\n\n.defeat-perfect {\n  background-color: rgba(255, 17, 0, 0.425);\n  border-style: solid;\n  border-width: 3px;\n  border-color: gold; }\n\n.icon-margin {\n  margin-right: 8px; }\n\n.mat-card {\n  background: rgba(255, 255, 255, 0.8); }\n\n.content-tab {\n  height: 100vh;\n  color: white;\n  text-align: center;\n  padding: 3%; }\n\n.fab-button {\n  z-index: 5;\n  position: fixed;\n  display: flex;\n  align-self: flex-end;\n  bottom: 0;\n  right: 0;\n  margin-bottom: 5%;\n  margin-right: 5%; }\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1; }\n  25% {\n    opacity: 0.75; }\n  50% {\n    opacity: 0.5; }\n  75% {\n    opacity: 0.75; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blink {\n  0% {\n    opacity: 1; }\n  25% {\n    opacity: 0.75; }\n  50% {\n    opacity: 0.5; }\n  75% {\n    opacity: 0.75; }\n  100% {\n    opacity: 1; } }\n\n.blink-effect {\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n.container {\n  text-align: center;\n  color: white; }\n\n.centered {\n  position: absolute;\n  top: 38%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F1Z3VzdG8vUHJvamV0b3Mvc2tpbnRvL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLCtDQUErQyxFQUFBOztBQUduRDtFQUNJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU8sRUFBQTs7QUFHWDtFQUNJLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLHlCQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsNEJBQXFDLEVBQUE7O0FBR3pDO0VBQ0kseUJBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQix5QkFBdUMsRUFBQTs7QUFHM0M7RUFDSSx5QkFBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLDBDQUEwQyxFQUFBOztBQUc5Qzs7RUFFSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSx5Q0FBeUMsRUFBQTs7QUFHN0M7RUFDSSx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5Q0FBeUMsRUFBQTs7QUFHN0M7RUFDSSx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsU0FBUztFQUNULFFBQVE7RUFDUixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLGFBQWEsRUFBQTtFQUVqQjtJQUNJLFlBQVksRUFBQTtFQUVoQjtJQUNJLGFBQWEsRUFBQTtFQUVqQjtJQUNJLFVBQVUsRUFBQSxFQUFBOztBQWRsQjtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxhQUFhLEVBQUE7RUFFakI7SUFDSSxZQUFZLEVBQUE7RUFFaEI7SUFDSSxhQUFhLEVBQUE7RUFFakI7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSSwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDJDQUFtQztVQUFuQyxtQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1oZWFkZXItY2VsbCxcbm1hdC1jZWxsIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZ3Jvb3ZlO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNzQpO1xufVxuXG5tYXQtdGFibGUge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ub3V0ZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLm1hdC10aXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5tYXQtY2FyZC5maXJzdC1wbGFjZSB7XG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDI1NSwgMjM4LCAwKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiKDI1NSwgMjM4LCAwKTtcbn1cblxuLm1hdC1jYXJkLnNlY29uZC1wbGFjZSB7XG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDE3NywgMTc3LCAxNzcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCByZ2IoMTI4LCAxMjgsIDEyOCk7XG59XG5cbi5tYXQtY2FyZC50aGlyZC1wbGFjZSB7XG4gICAgYm9yZGVyOiA2cHggc29saWQgcmdiKDEyMiwgNTUsIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCByZ2JhKDEyMiwgNTUsIDAsIDAuNSk7XG59XG5cbi5tYXQtcm93LFxuLm1hdC1oZWFkZXItcm93IHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XG59XG5cbi52aWN0b3J5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAyNTUsIDAsIDAuNDI1KTtcbn1cblxuLnZpY3RvcnktcGVyZmVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjU1LCAwLCAwLjQyNSk7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICBib3JkZXItY29sb3I6IGdvbGQ7XG59XG5cbi5kZWZlYXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNywgMCwgMC40MjUpO1xufVxuXG4uZGVmZWF0LXBlcmZlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNywgMCwgMC40MjUpO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgYm9yZGVyLWNvbG9yOiBnb2xkO1xufVxuXG4uaWNvbi1tYXJnaW4ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ubWF0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLmNvbnRlbnQtdGFiIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMyU7XG59XG5cbi5mYWItYnV0dG9uIHtcbiAgICB6LWluZGV4OiA1O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uYmxpbmstZWZmZWN0IHtcbiAgICBhbmltYXRpb246IGJsaW5rIDFzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2VudGVyZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM4JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */"

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
                score: 0,
                lastChampion: 'Nunu'
            },
            {
                name: 'Alexandre',
                score: 0,
                lastChampion: 'Caitlyn'
            },
            {
                name: 'André',
                score: 0,
                lastChampion: 'Morgana'
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
        var copyMatchToOrdering = this.matchs.data;
        copyMatchToOrdering.sort(this.sortByDateAsc);
        copyMatchToOrdering.forEach(function (element) {
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
                    _this.ranking[0].lastChampion = element.champion;
                    break;
                case _this.ranking[1].name:
                    _this.ranking[1].score++;
                    _this.ranking[1].lastChampion = element.champion;
                    break;
                case _this.ranking[2].name:
                    _this.ranking[2].score++;
                    _this.ranking[2].lastChampion = element.champion;
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
        copyMatchToOrdering.sort(this.sortByDateDesc);
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
    HomeComponent.prototype.sortByDateAsc = function (a, b) {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }
        return 0;
    };
    HomeComponent.prototype.sortByDateDesc = function (a, b) {
        if (a.date < b.date) {
            return 1;
        }
        if (a.date > b.date) {
            return -1;
        }
        return 0;
    };
    HomeComponent.prototype.getWinnerClassName = function () {
        if (this.ranking && this.ranking.length > 0) {
            return this.ranking[0].name.toLowerCase() + '-winning';
        }
    };
    HomeComponent.prototype.getLastChampionWinnerBG = function () {
        return {
            background: 'url("../../assets/img/background/' + this.ranking[0].lastChampion + '_0.jpg") repeat center top',
            '-webkit-transition': 'background-image 2s ease-in-out',
            '-moz-transition': 'background-image 2s ease-in-out',
            '-o-transition': 'background-image 2s ease-in-out',
            transition: 'background-image 2s ease-in-out'
        };
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

module.exports = __webpack_require__(/*! /home/augusto/Projetos/skinto/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.3f41f6f5a7030ec3b7fd.js.map