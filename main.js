(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gamilh\workspace\website\src\main.ts */"zUnb");


/***/ }),

/***/ "0vGW":
/*!****************************************************************!*\
  !*** ./src/app/features/trainings/trainings-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: TrainingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsRoutingModule", function() { return TrainingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trainings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainings.component */ "hOyg");





const routes = [
    {
        path: '',
        component: _trainings_component__WEBPACK_IMPORTED_MODULE_2__["TrainingsComponent"],
    },
];
class TrainingsRoutingModule {
}
TrainingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TrainingsRoutingModule });
TrainingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TrainingsRoutingModule_Factory(t) { return new (t || TrainingsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TrainingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainingsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "5wG6":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "rQ7a");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "iIrt");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "KDA1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class LayoutsModule {
}
LayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]],
                exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "6V8c":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginPageComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Saratoga 9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_form_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
} }
class LoginPageComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    login() {
        if (this.loginForm) {
            this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
            if (this.authService.isLoggedIn()) {
                this.router.navigateByUrl('/home');
            }
            else {
                this.router.navigateByUrl('/login');
            }
        }
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 2, vars: 1, consts: [[1, "custom-container", "pt-4", "mrg-horizon-auto"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "mt-4", "mb-4", "text-center"], ["src", "./assets/logo.png", 1, "logo"], [1, "ml-2"], [1, "form-group"], ["type", "text", "formControlName", "username", "id", "user-username", "aria-xdescribedby", "usernameHelp", "placeholder", "Username", 1, "form-control"], ["type", "password", "id", "user-password", "formControlName", "password", "placeholder", "Password", 1, "form-control"], [1, "form-group", "text-right"], [1, "btn", "btn-secondary", 3, "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginPageComponent_form_1_Template, 12, 1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["form[_ngcontent-%COMP%] { max-width: 300px; margin: 0 auto;}", ".logo[_ngcontent-%COMP%] { height: 50px; width: 50px; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                styles: [
                    'form { max-width: 300px; margin: 0 auto;}',
                    '.logo { height: 50px; width: 50px; }',
                ],
                template: `
    <div class="custom-container pt-4 mrg-horizon-auto">
      <form [formGroup]="loginForm" *ngIf="loginForm">
        <section class="mt-4 mb-4 text-center">
          <img src="./assets/logo.png" class="logo" />
          <span class="ml-2">Saratoga 9</span>
        </section>

        <div class="form-group">
          <input
            type="text"
            formControlName="username"
            class="form-control"
            id="user-username"
            aria-xdescribedby="usernameHelp"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="user-password"
            formControlName="password"
            placeholder="Password"
          />
        </div>
        <div class="form-group text-right">
          <button (click)="login()" class="btn btn-secondary">Login</button>
        </div>
      </form>
    </div>
  `,
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BQjy":
/*!********************************************************!*\
  !*** ./src/app/features/trainings/trainings.module.ts ***!
  \********************************************************/
/*! exports provided: TrainingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsModule", function() { return TrainingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trainings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainings.component */ "hOyg");
/* harmony import */ var _trainings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainings-routing.module */ "0vGW");




class TrainingsModule {
}
TrainingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TrainingsModule });
TrainingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TrainingsModule_Factory(t) { return new (t || TrainingsModule)(); }, imports: [[_trainings_routing_module__WEBPACK_IMPORTED_MODULE_2__["TrainingsRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TrainingsModule, { declarations: [_trainings_component__WEBPACK_IMPORTED_MODULE_1__["TrainingsComponent"]], imports: [_trainings_routing_module__WEBPACK_IMPORTED_MODULE_2__["TrainingsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_trainings_component__WEBPACK_IMPORTED_MODULE_1__["TrainingsComponent"]],
                imports: [_trainings_routing_module__WEBPACK_IMPORTED_MODULE_2__["TrainingsRoutingModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "IYfF");



class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.isLoggedIn();
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");



class AuthService {
    constructor(cookieService) {
        this.cookieService = cookieService;
    }
    login(username, password) {
        const authenticated = username === 'admin' && password === 'saratoga9';
        this.cookieService.set('authenticated', authenticated ? 'true' : 'false');
        return authenticated;
    }
    isLoggedIn() {
        return this.cookieService.get('authenticated') === 'true';
    }
    logout() {
        this.cookieService.delete('authenticated');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "KDA1":
/*!************************************************************!*\
  !*** ./src/app/layouts/navigation/navigation.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NavigationComponent_li_10_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r3.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r3.label, " ");
} }
function NavigationComponent_li_10_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", link_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", link_r3.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r3.label, " ");
} }
function NavigationComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavigationComponent_li_10_a_1_Template, 2, 2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavigationComponent_li_10_a_2_Template, 2, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r3.routerLink && link_r3.routerLink.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r3.link && link_r3.link.length);
} }
function NavigationComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setDocTitle("Saratoga 9 | Home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationComponent {
    constructor(authService, router, titleService) {
        this.authService = authService;
        this.router = router;
        this.titleService = titleService;
        this.linksList = [
            {
                protected: true,
                active: true,
                routerLink: '/cheat-sheet',
                label: 'Cheat Sheet',
            },
        ];
        this.links$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.linksList.filter((l) => l.active && !l.protected));
    }
    ngOnInit() {
        this.authenticated = this.authService.isLoggedIn();
        if (this.authenticated) {
            const links = this.linksList.filter((l) => l.active);
            this.links$.next(links);
        }
    }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/home');
        this.authenticated = false;
        this.links$.next(this.linksList.filter((l) => l.active && !l.protected));
    }
    setDocTitle(title) {
        this.titleService.setTitle(title);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 15, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "mt-3"], [1, "container", "custom-container"], ["routerLink", "/home", 1, "navbar-brand", "d-flex", "align-items-center", 3, "click"], ["src", "./assets/logo.png", 1, "logo"], [1, "ml-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar-items", "aria-controls", "navbar-items", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbar-items", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["class", "nav-item nav-link", "routerLink", "/login", 3, "click", 4, "ngIf"], ["class", "nav-item nav-link", 3, "click", 4, "ngIf"], ["class", "nav-item nav-link", 3, "routerLink", 4, "ngIf"], ["class", "nav-item nav-link", "target", "_blank", 3, "innerHtml", "href", 4, "ngIf"], [1, "nav-item", "nav-link", 3, "routerLink"], ["target", "_blank", 1, "nav-item", "nav-link", 3, "innerHtml", "href"], ["routerLink", "/login", 1, "nav-item", "nav-link", 3, "click"], [1, "fas", "fa-sign-in-alt"], [1, "nav-item", "nav-link", 3, "click"], [1, "fas", "fa-sign-out-alt"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_2_listener() { return ctx.setDocTitle("Saratoga 9 | Home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Saratoga 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavigationComponent_li_10_Template, 3, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavigationComponent_a_13_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavigationComponent_a_14_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 3, ctx.links$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticated);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".logo[_ngcontent-%COMP%] { height: 50px; width: 50px;}", ".nav-item[_ngcontent-%COMP%] { cursor: pointer; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                styles: [
                    '.logo { height: 50px; width: 50px;}',
                    '.nav-item { cursor: pointer; }',
                ],
                template: `
    <nav class="navbar navbar-expand-lg navbar-light mt-3">
      <div class="container custom-container">
        <a
          class="navbar-brand d-flex align-items-center"
          (click)="setDocTitle('Saratoga 9 | Home')"
          routerLink="/home"
        >
          <img src="./assets/logo.png" class="logo" />
          <span class="ml-2">Saratoga 9</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-items"
          aria-controls="navbar-items"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-items">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" *ngFor="let link of links$ | async">
              <a
                class="nav-item nav-link"
                *ngIf="link.routerLink && link.routerLink.length"
                routerLink="{{ link.routerLink }}"
              >
                {{ link.label }}
              </a>
              <a
                class="nav-item nav-link"
                *ngIf="link.link && link.link.length"
                [innerHtml]="link.label"
                target="_blank"
                href="{{ link.link }}"
              >
                {{ link.label }}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-item nav-link"
                (click)="setDocTitle('Saratoga 9 | Home')"
                routerLink="/login"
                *ngIf="!authenticated"
              >
                <i class="fas fa-sign-in-alt"></i>
              </a>
              <a
                class="nav-item nav-link"
                *ngIf="authenticated"
                (click)="logout()"
              >
                <i class="fas fa-sign-out-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/video/video.component */ "kEUT");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _components_video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _components_video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"],
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: ` <router-outlet></router-outlet> `,
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/layouts.module */ "5wG6");
/* harmony import */ var _features_trainings_trainings_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/trainings/trainings.module */ "BQjy");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"],
            _features_trainings_trainings_module__WEBPACK_IMPORTED_MODULE_7__["TrainingsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_6__["LayoutsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"],
        _features_trainings_trainings_module__WEBPACK_IMPORTED_MODULE_7__["TrainingsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_6__["LayoutsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"],
                    _features_trainings_trainings_module__WEBPACK_IMPORTED_MODULE_7__["TrainingsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_6__["LayoutsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found-page/page-not-found-page.component */ "ecl7");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/login-page.component */ "6V8c");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");






class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]], exports: [_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
                exports: [_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ecl7":
/*!****************************************************************************!*\
  !*** ./src/app/pages/page-not-found-page/page-not-found-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundPageComponent", function() { return PageNotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundPageComponent {
    constructor() { }
    ngOnInit() { }
}
PageNotFoundPageComponent.ɵfac = function PageNotFoundPageComponent_Factory(t) { return new (t || PageNotFoundPageComponent)(); };
PageNotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundPageComponent, selectors: [["app-page-not-found-page"]], decls: 1, vars: 0, template: function PageNotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Page Not Found Page ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found-page',
                styleUrls: ['./page-not-found-page.component.scss'],
                template: ` Page Not Found Page `,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hOyg":
/*!***********************************************************!*\
  !*** ./src/app/features/trainings/trainings.component.ts ***!
  \***********************************************************/
/*! exports provided: TrainingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsComponent", function() { return TrainingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TrainingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TrainingsComponent.ɵfac = function TrainingsComponent_Factory(t) { return new (t || TrainingsComponent)(); };
TrainingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrainingsComponent, selectors: [["app-trainings"]], decls: 21, vars: 0, consts: [[1, "h3"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://player.vimeo.com/video/502015585"), "width", "640", "height", "360", "frameborder", "0", "allow", "autoplay; fullscreen; picture-in-picture", "allowfullscreen", ""], [1, "h4"], [1, "h5"]], template: function TrainingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Jan 17, 2021 - Training - Zoom Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Google Integration with Zoom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Prerequisites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Make sure you have a Gmail Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Make sure you have Ward Zoom Credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Go to https://calendar.google.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Click on plus sign to add Zoom as an add-on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Each person will have a different experience depending on whether you have a Windows or Mac or Chromebook desktop. Walk through the steps it will lead you through.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZ3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trainings',
                templateUrl: './trainings.component.html',
                styleUrls: ['./trainings.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iIrt":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [["id", "footer", 1, "container", "custom-container", "mrg-btm-150", "text-right"], ["src", "./assets/logo.png", 1, "footer-logo"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A9 2021 | Saratoga 9 Bishopric ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {position: relative; min-height: 200px; margin-top: 80px;}", "img.footer-logo[_ngcontent-%COMP%] {opacity: 0.09; position: absolute; right: 0; top: -23px;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                styles: [
                    '#footer {position: relative; min-height: 200px; margin-top: 80px;}',
                    'img.footer-logo {opacity: 0.09; position: absolute; right: 0; top: -23px;}',
                ],
                template: `
    <div class="container custom-container mrg-btm-150 text-right" id="footer">
      <img src="./assets/logo.png" class="footer-logo" />
      &#169; 2021 | Saratoga 9 Bishopric
    </div>
  `,
            }]
    }], null, null); })();


/***/ }),

/***/ "kEUT":
/*!************************************************************!*\
  !*** ./src/app/shared/components/video/video.component.ts ***!
  \************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VideoComponent {
    constructor() {
        this.width = 320;
        this.height = 240;
        this.type = 'video/mp4';
        this.notSupportedMessage = 'Your browser does not support the video tag.';
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { width: "width", height: "height", type: "type", source: "source", title: "title", notSupportedMessage: "notSupportedMessage" }, decls: 6, vars: 6, consts: [[1, "video"], [1, "title"], ["controls", "", 3, "width", "height"], [3, "src", "type"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.notSupportedMessage, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                styleUrls: ['./video.component.scss'],
                template: `
    <div class="video">
      <div class="title">{{ title }}</div>
      <video width="{{ width }}" height="{{ height }}" controls>
        <source src="{{ source }}" type="{{ type }}" />
        {{ notSupportedMessage }}
      </video>
    </div>
  `,
            }]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notSupportedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rQ7a":
/*!**************************************************************!*\
  !*** ./src/app/layouts/main-layout/main-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation.component */ "KDA1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "iIrt");





class MainLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main"]], decls: 4, vars: 0, consts: [[1, "custom-container", "container", "pt-4", "mrg-horizon-auto"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                template: `
    <app-navigation></app-navigation>
    <div class="custom-container container pt-4 mrg-horizon-auto">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-not-found-page/page-not-found-page.component */ "ecl7");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");
/* harmony import */ var _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/main-layout/main-layout.component */ "rQ7a");








const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
    },
    {
        path: '',
        component: _layouts_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | features-home-home-module */[__webpack_require__.e("default~features-cheat-sheet-cheat-sheet-module~features-home-home-module~features-sacrament-sacrament-module"), __webpack_require__.e("features-home-home-module")]).then(__webpack_require__.bind(null, /*! ./features/home/home.module */ "fOOd")).then((m) => m.HomeModule),
            },
            {
                path: 'sacrament',
                loadChildren: () => Promise.all(/*! import() | features-sacrament-sacrament-module */[__webpack_require__.e("default~features-cheat-sheet-cheat-sheet-module~features-home-home-module~features-sacrament-sacrament-module"), __webpack_require__.e("features-sacrament-sacrament-module")]).then(__webpack_require__.bind(null, /*! ./features/sacrament/sacrament.module */ "G9/G")).then((m) => m.SacramentModule),
            },
            {
                path: 'cheat-sheet',
                canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: () => Promise.all(/*! import() | features-cheat-sheet-cheat-sheet-module */[__webpack_require__.e("default~features-cheat-sheet-cheat-sheet-module~features-home-home-module~features-sacrament-sacrament-module"), __webpack_require__.e("features-cheat-sheet-cheat-sheet-module")]).then(__webpack_require__.bind(null, /*! ./features/cheat-sheet/cheat-sheet.module */ "/gp7")).then((m) => m.CheatSheetModule),
            },
            {
                path: 'trainings',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./features/trainings/trainings.module */ "BQjy")).then((m) => m.TrainingsModule)
            },
        ],
    },
    {
        path: '**',
        component: _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundPageComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map