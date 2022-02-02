(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-trainings-trainings-module"],{

/***/ "3Gbb":
/*!*************************************************************************!*\
  !*** ./apps/web/src/app/features/trainings/trainings-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: TrainingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsRoutingModule", function() { return TrainingsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _trainings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainings.component */ "3Q0W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");




const routes = [
    {
        path: '',
        component: _trainings_component__WEBPACK_IMPORTED_MODULE_1__["TrainingsComponent"],
    },
];
class TrainingsRoutingModule {
}
TrainingsRoutingModule.ɵfac = function TrainingsRoutingModule_Factory(t) { return new (t || TrainingsRoutingModule)(); };
TrainingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TrainingsRoutingModule });
TrainingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrainingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "3Q0W":
/*!********************************************************************!*\
  !*** ./apps/web/src/app/features/trainings/trainings.component.ts ***!
  \********************************************************************/
/*! exports provided: TrainingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsComponent", function() { return TrainingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class TrainingsComponent {
    constructor() { }
    ngOnInit() { }
}
TrainingsComponent.ɵfac = function TrainingsComponent_Factory(t) { return new (t || TrainingsComponent)(); };
TrainingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrainingsComponent, selectors: [["s9-trainings"]], decls: 1, vars: 0, consts: [["src", "https://docs.google.com/presentation/d/e/2PACX-1vSmflNtADDHHlyVhPggRvpDFTuNgATCouuxUW2WycFVefTXqG216O57x4Ly0SmW5f8A8NS7iP5EMYGl/embed?start=true&loop=false&delayms=600000", "frameborder", "0", "width", "760", "height", "669", "allowfullscreen", "true", "mozallowfullscreen", "true", "webkitallowfullscreen", "true"]], template: function TrainingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZ3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "y7X7":
/*!*****************************************************************!*\
  !*** ./apps/web/src/app/features/trainings/trainings.module.ts ***!
  \*****************************************************************/
/*! exports provided: TrainingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsModule", function() { return TrainingsModule; });
/* harmony import */ var _trainings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainings.component */ "3Q0W");
/* harmony import */ var _trainings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainings-routing.module */ "3Gbb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



class TrainingsModule {
}
TrainingsModule.ɵfac = function TrainingsModule_Factory(t) { return new (t || TrainingsModule)(); };
TrainingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TrainingsModule });
TrainingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_trainings_routing_module__WEBPACK_IMPORTED_MODULE_1__["TrainingsRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrainingsModule, { declarations: [_trainings_component__WEBPACK_IMPORTED_MODULE_0__["TrainingsComponent"]], imports: [_trainings_routing_module__WEBPACK_IMPORTED_MODULE_1__["TrainingsRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=features-trainings-trainings-module.js.map