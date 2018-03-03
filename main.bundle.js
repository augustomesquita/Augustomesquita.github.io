webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_locales_pt__ = __webpack_require__("../../../common/locales/pt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_svg_icon__ = __webpack_require__("../../../../angular-svg-icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_mouse_over_highlight_mouse_over_highlight_directive__ = __webpack_require__("../../../../../src/app/shared/mouse-over-highlight/mouse-over-highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_meu_servico_meu_servico_service__ = __webpack_require__("../../../../../src/app/service/meu-servico/meu-servico.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_settings_settings_service__ = __webpack_require__("../../../../../src/app/service/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_layout_login_login_component__ = __webpack_require__("../../../../../src/app/login-layout/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_layout_main_home_componente_reusavel_componente_reusavel_component__ = __webpack_require__("../../../../../src/app/main-layout/main/home/componente-reusavel/componente-reusavel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_layout_main_home_home_component__ = __webpack_require__("../../../../../src/app/main-layout/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_layout_main_about_about_component__ = __webpack_require__("../../../../../src/app/main-layout/main/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_layout_main_nav_nav_component__ = __webpack_require__("../../../../../src/app/main-layout/main/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_layout_login_layout_component__ = __webpack_require__("../../../../../src/app/login-layout/login-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_layout_main_layout_component__ = __webpack_require__("../../../../../src/app/main-layout/main-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_layout_main_home_curso_curso_component__ = __webpack_require__("../../../../../src/app/main-layout/main/home/curso/curso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_curso_curso_service__ = __webpack_require__("../../../../../src/app/service/curso/curso.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Módulos do angular




// Registra local para Brasil


Object(__WEBPACK_IMPORTED_MODULE_4__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_5__angular_common_locales_pt__["a" /* default */]);
// Módulos de terceiros




// Elementos criados para o projeto














var config = new __WEBPACK_IMPORTED_MODULE_8_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_8_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_8_angular4_social_login__["FacebookLoginProvider"]('1604161956329292')
    }
]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__shared_mouse_over_highlight_mouse_over_highlight_directive__["a" /* MouseOverHighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__main_layout_main_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__main_layout_main_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__main_layout_main_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_layout_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_layout_main_home_componente_reusavel_componente_reusavel_component__["a" /* ComponenteReusavelComponent */],
                __WEBPACK_IMPORTED_MODULE_19__login_layout_login_layout_component__["a" /* LoginLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_20__main_layout_main_layout_component__["a" /* MainLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_21__main_layout_main_home_curso_curso_component__["a" /* CursoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8_angular4_social_login__["SocialLoginModule"].initialize(config),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angular_svg_icon__["a" /* AngularSvgIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRouting */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__service_meu_servico_meu_servico_service__["a" /* MeuServicoService */],
                __WEBPACK_IMPORTED_MODULE_12__service_settings_settings_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_22__service_curso_curso_service__["a" /* CursoService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"],
                    deps: [__WEBPACK_IMPORTED_MODULE_12__service_settings_settings_service__["a" /* SettingsService */]],
                    useFactory: function (settingService) { return settingService.getLocale(); }
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_layout_login_login_component__ = __webpack_require__("../../../../../src/app/login-layout/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_layout_main_about_about_component__ = __webpack_require__("../../../../../src/app/main-layout/main/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_layout_main_home_home_component__ = __webpack_require__("../../../../../src/app/main-layout/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_main_layout_main_layout_component__ = __webpack_require__("../../../../../src/app/main-layout/main-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_login_layout_login_layout_component__ = __webpack_require__("../../../../../src/app/login-layout/login-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_main_layout_main_home_curso_curso_component__ = __webpack_require__("../../../../../src/app/main-layout/main/home/curso/curso.component.ts");







var APP_ROUTES = [
    // A ORDEM IMPORTA NO MOMENTO DA VERIFICAÇÃO
    // QUANDO OS DOIS PATH SÃO O MESMOS, COMO NO CASO
    // DE HOME-LAYOUT-COMPONENT E LOGIN-LAYOUT-COMPONENT
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_5_app_login_layout_login_layout_component__["a" /* LoginLayoutComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_layout_login_login_component__["a" /* LoginComponent */] }] // SEGUNDO
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_4_app_main_layout_main_layout_component__["a" /* MainLayoutComponent */],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__main_layout_main_home_home_component__["a" /* HomeComponent */] },
            { path: 'curso/:id', component: __WEBPACK_IMPORTED_MODULE_6_app_main_layout_main_home_curso_curso_component__["a" /* CursoComponent */] },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__main_layout_main_about_about_component__["a" /* AboutComponent */] } // SEXTO
        ]
    }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/login-layout/login-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-layout',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-layout/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\r\n\r\n  <div class=\"col-10 col-sm-8 col-md-6 col-lg-4 mt-3\">\r\n    <form class=\"form-signin\">\r\n      <h2 class=\"form-signin-heading\">Login</h2>\r\n      <button class=\"btn btn-lg btn-outline-primary btn-block\" (click)=\"fazerLogin()\">LOGIN COM FACEBOOK</button>\r\n    </form>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login-layout/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-layout/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authStateSubscription = this.accountValidator(this.authService);
    };
    LoginComponent.prototype.fazerLogin = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.accountValidator = function (authService) {
        var _this = this;
        return authService.authState.subscribe(function (user) {
            if (user) {
                _this.router.navigate(['/home']);
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authStateSubscription.unsubscribe();
        console.log('Para de escutar subscribe de usuário.');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login-layout/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-layout/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular4_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-layout/main-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-layout/main-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    MainLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__("../../../../../src/app/main-layout/main-layout.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-layout/main/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<span>Projeto criado por Augusto Mesquita (\r\n  <a href=\"https://github.com/Augustomesquita\" target=\"_blank\">Perfil GitHub</a>).\r\n  <br/> Esse aplicativo foi gerado usando Angular CLI versão 1.6.5. O intuito dele é parecido com o projeto Typescripting, ou\r\n  seja, apenas para aprendizado e utilização de técnicas pontuais.\r\n</span>"

/***/ }),

/***/ "../../../../../src/app/main-layout/main/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-layout/main/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/main-layout/main/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-layout/main/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-layout/main/home/componente-reusavel/componente-reusavel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card p-3 m-custom-well-sm background-gray\" [ngClass]=\"borderClass()\">\r\n    <div>\r\n        <b>Input Property e Output Property (este último com auxílio do Event Emitter)</b>\r\n        <br/>\r\n        <span>Para verificar o evento que está sendo emitido, abra o console e clique no botão de incremento ou decremento</span>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <button class=\"btn\" [ngClass]=\"btnClass()\" (click)=\"decrementa()\">\r\n            <b>-</b>\r\n        </button>\r\n        <input [value]=\"valor\" readonly/>\r\n        <button class=\"btn\" [ngClass]=\"btnClass()\" (click)=\"incrementa()\">\r\n            <b>+</b>\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-layout/main/home/componente-reusavel/componente-reusavel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-layout/main/home/componente-reusavel/componente-reusavel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponenteReusavelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponenteReusavelComponent = /** @class */ (function () {
    function ComponenteReusavelComponent() {
        this.valorMudou = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ComponenteReusavelComponent.prototype.ngOnChanges = function (changes) {
        console.log('OnChange ocorreu!');
        if (changes.valor) {
            console.log("Mudan\u00E7a em 'valor':");
            console.log(changes.valor);
        }
        if (changes.componenteReusavelSlcColorPage) {
            console.log("Mudan\u00E7a em 'componenteReusavelSlcColorPage':");
            console.log(changes.componenteReusavelSlcColorPage);
        }
    };
    ComponenteReusavelComponent.prototype.incrementa = function () {
        this.valor++;
        this.valorMudou.emit({ novoValor: this.valor });
    };
    ComponenteReusavelComponent.prototype.decrementa = function () {
        this.valor--;
        this.valorMudou.emit({ novoValor: this.valor });
    };
    ComponenteReusavelComponent.prototype.borderClass = function () {
        return {
            'border-blue': this.componenteReusavelSlcColorPage === 'blue',
            'border-orange': this.componenteReusavelSlcColorPage === 'orange',
            'border-red': this.componenteReusavelSlcColorPage === 'red'
        };
    };
    ComponenteReusavelComponent.prototype.btnClass = function () {
        return {
            'btn-primary': this.componenteReusavelSlcColorPage === 'blue',
            'btn-warning': this.componenteReusavelSlcColorPage === 'orange',
            'btn-danger': this.componenteReusavelSlcColorPage === 'red'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ComponenteReusavelComponent.prototype, "valor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ComponenteReusavelComponent.prototype, "componenteReusavelSlcColorPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ComponenteReusavelComponent.prototype, "valorMudou", void 0);
    ComponenteReusavelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-componente-reusavel',
            template: __webpack_require__("../../../../../src/app/main-layout/main/home/componente-reusavel/componente-reusavel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-layout/main/home/componente-reusavel/componente-reusavel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ComponenteReusavelComponent);
    return ComponenteReusavelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-layout/main/home/curso/curso.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{curso?.id}} / {{curso?.name}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main-layout/main/home/curso/curso.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-layout/main/home/curso/curso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_curso_curso_service__ = __webpack_require__("../../../../../src/app/service/curso/curso.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CursoComponent = /** @class */ (function () {
    function CursoComponent(activatedRoute, cursoService) {
        this.activatedRoute = activatedRoute;
        this.cursoService = cursoService;
    }
    CursoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Resgata id que está sendo passado como parâmetro
        this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        // Loga no console
        this.curso = this.cursoService.getCurso(this.id);
        console.log('CURSO LOGADO: ' + this.curso);
    };
    CursoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-curso',
            template: __webpack_require__("../../../../../src/app/main-layout/main/home/curso/curso.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-layout/main/home/curso/curso.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_app_service_curso_curso_service__["a" /* CursoService */]])
    ], CursoComponent);
    return CursoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-layout/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card m-custom-well-sm p-3 mt-3 col-sm-12\" [ngClass]=\"borderClass()\">\r\n  <label for=\"iptText\">\r\n    <b>Copiando / Salvando texto utilizando 'Event Binding'</b>\r\n  </label>\r\n  <input id=\"iptText\" type=\"text\" #iptText (input)=\"mostrarTexto(iptText.value)\" (keyup.enter)=\"salvarTexto(iptText.value)\"\r\n    (blur)=\"salvarTexto(iptText.value)\" value=\"\" />\r\n  <br/>\r\n  <br/>\r\n\r\n  <div [appMouseOverHighlight]='slcColorPage'>\r\n    Texto copiado: {{ textoParaSerMostrado }}\r\n    <br/>Texto salvo quando pressionado enter ou retirado foco do input: {{ textoParaSerSalvo }}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card col-12 mt-3 p-3\" style=\"width: 20rem;\" [ngClass]=\"borderClass()\">\r\n  <img class=\"card-img-top\" src=\"{{ user?.photoUrl }}\" alt=\"Card image cap\">\r\n  <div class=\"card-block\">\r\n    <h4 class=\"card-title\">{{ user?.name }}</h4>\r\n    <p class=\"card-text\">{{ user?.email }}</p>\r\n    <button (click)=\"fazerLogout()\" class=\"btn btn-primary\">LOGOUT</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card col-12 mt-3 p-3\" [ngClass]=\"borderClass()\">\r\n  <div class=\"row align-items-center\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <label>\r\n          <b>Copiando texto utilizando 'Two-way Data Binding'</b>\r\n        </label>\r\n      </div>\r\n      <div>\r\n        <div>Texto original</div>\r\n        <input type=\"text\" [(ngModel)]=\"twoWayText\" />\r\n        <br/>\r\n        <br/>\r\n\r\n        <div>Texto copiado</div>\r\n        <textarea disabled [placeholder]=\"twoWayText\"></textarea>\r\n      </div>\r\n    </div>\r\n    <app-componente-reusavel class=\"col\" [componenteReusavelSlcColorPage]=\"slcColorPage\" [valor]=\"valorEnviado\" (valorMudou)=\"valorEnviado = $event.novoValor\"></app-componente-reusavel>\r\n  </div>\r\n\r\n  <div class=\"col-12 mt-3\">\r\n    <b>\r\n      <i>\r\n        *** Observe que ao mudar valor no componente reusável, pelo fato do mesmo refletir no valor da variável do componente pai,\r\n        e este valor da variável pai estar sendo ouvido pelo componente filho através de property input, ocorre um NgOnChange\r\n        no componente reusável. Para ver detalhes abra o LOG do console e realize a modificação do valor na interface.\r\n      </i>\r\n    </b>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card col-12 mt-3 p-3\" [ngClass]=\"borderClass()\">\r\n  <b>Utilizando Serviço através de Injeção de Dependências</b>\r\n  <br/>\r\n\r\n  <form (ngSubmit)=\"addUsingService(iptNewString)\">\r\n    <input type=\"text\" #iptNewString placeholder=\"Digite algo aqui...\">\r\n    <button type=\"submit\" class=\"btn\" [ngClass]=\"btnClass()\">ADD</button>\r\n  </form>\r\n\r\n  <span *ngFor=\"let string of stringsFromService; index as i\">\r\n    {{ i + 1 }} - {{ string }}\r\n  </span>\r\n</div>\r\n\r\n\r\n<div class=\"card col-12 mt-3 p-3\" [ngClass]=\"borderClass()\">\r\n  <b>Utilizando Pipes para transformar dados</b>\r\n  <br/>\r\n  <div class=\"row\">\r\n    <div class=\"col-6 p-2\" style=\"background-color: rgb(228, 228, 228)\">\r\n      <div class=\"text-center\">\r\n        <b>ORIGINAL</b>\r\n      </div>\r\n      <br/>\r\n      <p>Título: {{livro.titulo}}</p>\r\n      <p>Data: {{livro.dataLancamento}}</p>\r\n      <p>Preço: {{livro.preco}}</p>\r\n    </div>\r\n    <div class=\"col-6 p-2\">\r\n      <div class=\"text-center\">\r\n        <b>TRANSFORMADO</b>\r\n      </div>\r\n      <br/>\r\n      <p>Título: {{livro.titulo}}</p>\r\n      <p>Data: {{livro.dataLancamento | date }}</p>\r\n      <p>Preço: {{livro.preco | currency:'BRL':'symbol-narrow'}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br/>"

/***/ }),

/***/ "../../../../../src/app/main-layout/main/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-layout/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_meu_servico_meu_servico_service__ = __webpack_require__("../../../../../src/app/service/meu-servico/meu-servico.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_settings_settings_service__ = __webpack_require__("../../../../../src/app/service/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_social_login__ = __webpack_require__("../../../../angular4-social-login/angular4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(meuServico, settingsService, authService, router) {
        var _this = this;
        this.meuServico = meuServico;
        this.settingsService = settingsService;
        this.authService = authService;
        this.router = router;
        this.slcColorPage = 'blue';
        this.isMouseOver = false;
        this.twoWayText = 'two-way-data-binding';
        this.valorEnviado = 50;
        this.stringsFromService = meuServico.getAllStrings();
        this.settingsService.themeColorEmitter.subscribe(function (res) { return _this.slcColorPage = res; });
        this.livro = {
            titulo: 'Easy Angularing',
            dataLancamento: 1518782264848,
            preco: 30
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.authStateSubscription = this.accountValidator(this.authService);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.authStateSubscription.unsubscribe();
    };
    HomeComponent.prototype.accountValidator = function (authService) {
        var _this = this;
        return authService.authState.subscribe(function (user) {
            if (!user) {
                _this.router.navigate(['/']);
            }
            else {
                _this.user = user;
                _this.loggedIn = (user != null);
            }
        });
    };
    HomeComponent.prototype.fazerLogout = function () {
        this.authService.signOut();
    };
    HomeComponent.prototype.mostrarTexto = function (textoParaSerMostrado) {
        this.textoParaSerMostrado = textoParaSerMostrado;
    };
    HomeComponent.prototype.salvarTexto = function (textoParaSerSalvo) {
        this.textoParaSerSalvo = textoParaSerSalvo;
    };
    HomeComponent.prototype.mouseOverOut = function () {
        this.isMouseOver = !this.isMouseOver;
    };
    HomeComponent.prototype.setStyles = function () {
        var styles = {
            'font-style': this.isMouseOver ? 'italic' : 'normal',
            'font-weight': this.isMouseOver ? 'bold' : null,
            'font-size': this.isMouseOver ? 'large' : null,
            'cursor': this.isMouseOver ? 'pointer' : null,
        };
        return styles;
    };
    HomeComponent.prototype.btnClass = function () {
        return {
            'btn-primary': this.slcColorPage === 'blue',
            'btn-warning': this.slcColorPage === 'orange',
            'btn-danger': this.slcColorPage === 'red'
        };
    };
    HomeComponent.prototype.borderClass = function () {
        return 'border-' + this.slcColorPage;
    };
    HomeComponent.prototype.divWithMouseEffectClass = function () {
        return {
            'background-blue': this.slcColorPage === 'blue' && this.isMouseOver,
            'background-orange': this.slcColorPage === 'orange' && this.isMouseOver,
            'background-red': this.slcColorPage === 'red' && this.isMouseOver
        };
    };
    HomeComponent.prototype.addUsingService = function (ipt) {
        this.meuServico.putString(ipt.value);
        ipt.value = '';
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/main-layout/main/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-layout/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_service_meu_servico_meu_servico_service__["a" /* MeuServicoService */], __WEBPACK_IMPORTED_MODULE_3_app_service_settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_4_angular4_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-layout/main/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-expand-lg navbar-light\" [ngClass]=\"divClass()\">\r\n  <ul class=\"navbar-nav mr-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n        <svg-icon src=\"/assets/home.svg\" style=\"fill: currentColor; width:32px;\"></svg-icon>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">\r\n        <svg-icon src=\"/assets/about.svg\" style=\"fill:currentColor; width:32px\"></svg-icon>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\r\n<div [ngClass]=\"divClass()\">\r\n  <select (change)=\"themeColorSelected()\" [(ngModel)]=\"slcColorPage\" class=\"form-control btn\" [ngClass]=\"btnClass()\">\r\n    <option value=\"blue\">TEMA AZUL</option>\r\n    <option value=\"red\" selected>TEMA VERMELHO</option>\r\n    <option value=\"orange\">TEMA LARANJA</option>\r\n  </select>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-layout/main/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-layout/main/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_settings_settings_service__ = __webpack_require__("../../../../../src/app/service/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(settingService) {
        this.settingService = settingService;
        this.isMouseOnHomeValue = false;
        if (localStorage.getItem('theme')) {
            this.slcColorPage = localStorage.getItem('theme');
        }
        else {
            this.slcColorPage = 'blue';
            localStorage.setItem('theme', this.slcColorPage);
        }
    }
    NavComponent.prototype.ngOnInit = function () {
        this.settingService.setThemeColor(this.slcColorPage);
    };
    NavComponent.prototype.themeColorSelected = function () {
        localStorage.setItem('theme', this.slcColorPage);
        this.settingService.setThemeColor(this.slcColorPage);
    };
    NavComponent.prototype.setStyles = function () {
        var styles = {
            'fill': this.isMouseOnHomeValue ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 1)',
        };
        return styles;
    };
    NavComponent.prototype.isMouseOnHome = function () {
        this.isMouseOnHomeValue = !this.isMouseOnHomeValue;
    };
    NavComponent.prototype.divClass = function () {
        return {
            'background-blue': this.slcColorPage === 'blue',
            'background-orange': this.slcColorPage === 'orange',
            'background-red': this.slcColorPage === 'red'
        };
    };
    NavComponent.prototype.btnClass = function () {
        return {
            'btn-primary': this.slcColorPage === 'blue',
            'btn-warning': this.slcColorPage === 'orange',
            'btn-danger': this.slcColorPage === 'red'
        };
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/main-layout/main/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-layout/main/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_service_settings_settings_service__["a" /* SettingsService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/curso/curso.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CursoService = /** @class */ (function () {
    function CursoService() {
        this.cursos = [
            { id: 1, name: 'Angular' },
            { id: 2, name: 'Java' },
            { id: 3, name: 'SpringBoot' }
        ];
    }
    CursoService.prototype.getCursos = function () {
        return this.cursos;
    };
    CursoService.prototype.getCurso = function (id) {
        return this.cursos.find(function (curso) { return curso.id == id; });
    };
    CursoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CursoService);
    return CursoService;
}());



/***/ }),

/***/ "../../../../../src/app/service/meu-servico/meu-servico.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeuServicoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeuServicoService = /** @class */ (function () {
    function MeuServicoService() {
        this.strings = ['Angularing', 'Typescrip', 'Serviço'];
    }
    MeuServicoService.prototype.getAllStrings = function () {
        return this.strings;
    };
    MeuServicoService.prototype.putString = function (string) {
        this.strings.push(string);
        string = '';
    };
    MeuServicoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MeuServicoService);
    return MeuServicoService;
}());



/***/ }),

/***/ "../../../../../src/app/service/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.themeColorEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.themeColor = 'blue';
    }
    SettingsService.prototype.getLocale = function () {
        return 'pt';
    };
    SettingsService.prototype.setThemeColor = function (themeColor) {
        this.themeColor = themeColor;
        this.themeColorEmitter.emit(this.themeColor);
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/mouse-over-highlight/mouse-over-highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseOverHighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseOverHighlightDirective = /** @class */ (function () {
    function MouseOverHighlightDirective() {
    }
    MouseOverHighlightDirective.prototype.ngOnInit = function () {
        if (!this.appMouseOverHighlight) {
            this.appMouseOverHighlight = 'blue';
        }
    };
    MouseOverHighlightDirective.prototype.changeBackgroundToHightlightColor = function () {
        this.hostClass = 'background-' + this.appMouseOverHighlight;
        this.hostStyleColor = 'white';
    };
    MouseOverHighlightDirective.prototype.changeBackgroundToDefaultColor = function () {
        this.hostStyleColor = '';
        this.hostClass = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MouseOverHighlightDirective.prototype, "appMouseOverHighlight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], MouseOverHighlightDirective.prototype, "hostClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.color'),
        __metadata("design:type", String)
    ], MouseOverHighlightDirective.prototype, "hostStyleColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MouseOverHighlightDirective.prototype, "changeBackgroundToHightlightColor", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MouseOverHighlightDirective.prototype, "changeBackgroundToDefaultColor", null);
    MouseOverHighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appMouseOverHighlight]'
        })
    ], MouseOverHighlightDirective);
    return MouseOverHighlightDirective;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map