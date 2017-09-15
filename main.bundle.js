webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alert-details/alert-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  padding: 16px;\n\n  width: 100%;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nmd-card{\n  width: 600px;\n}\n\nmd-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nmd-form-field {\n  width: 100%;\n}\n\n\nmd-select {\n  width: 100%;\n}\n\n.select {\n  width: 100%;\n  -ms-flex-item-align: baseline;\n      align-self: baseline;\n  padding: 16px;\n}\n\n.fdc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 16px;\n}\n\nmd-radio-button{\n  margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alert-details/alert-details.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <md-card class=\"user-list-card \">\n\n    <md-card-title>\n      Alert Settings\n    </md-card-title>\n\n    <md-card-subtitle>\n      <b>General Section</b>\n    </md-card-subtitle>\n\n\n    <md-card-content class=\"example-full-width\">\n\n      <md-grid-list cols=\"2\" rowHeight=\"3:1\">\n\n        <md-grid-tile colspan=\"1\">\n          <div class=\"select\">\n            <md-select placeholder=\"User\">\n              <md-option *ngFor=\"let item of users\" [value]=\"item\">\n                {{ item }}\n              </md-option>\n            </md-select>\n          </div>\n        </md-grid-tile>\n\n        <md-grid-tile colspan=\"1\">\n\n        </md-grid-tile>\n\n        <md-grid-tile rowspan=\"2\" class=\"flex-direction-column\">\n          <div class=\"select\">\n            <span>Providers</span>\n            <md-selection-list>\n              <md-list-option *ngFor=\"let item of alertProviders\">\n                {{item}}\n              </md-list-option>\n            </md-selection-list>\n          </div>\n        </md-grid-tile>\n\n        <md-grid-tile rowspan=\"2\" class=\"flex-direction-column\">\n          <div class=\"select\">\n            <span>Pendant Event Types</span>\n            <md-selection-list>\n              <md-list-option *ngFor=\"let item of pendantEventTypes\">\n                {{item}}\n              </md-list-option>\n            </md-selection-list>\n          </div>\n        </md-grid-tile>\n\n        <md-grid-tile rowspan=\"3\">\n          <md-radio-group class=\"fdc\">\n            <md-radio-button checked=\"true\">All Patient</md-radio-button>\n            <md-radio-button value=\"1\">\n              <md-select placeholder=\"Branch\">\n                <md-option *ngFor=\"let item of branches\" [value]=\"item\">\n                  {{ item }}\n                </md-option>\n              </md-select>\n\n            </md-radio-button>\n            <md-radio-button value=\"2\">\n              <md-select placeholder=\"Facility\">\n                <md-option *ngFor=\"let item of facilities\" [value]=\"item\">\n                  {{ item }}\n                </md-option>\n              </md-select>\n            </md-radio-button>\n            <md-radio-button value=\"3\">\n                <md-select placeholder=\"Specific Patient\">\n                  <md-option *ngFor=\"let item of patients\" [value]=\"item\">\n                    {{ item }}\n                  </md-option>\n                </md-select>\n            </md-radio-button>\n          </md-radio-group>\n        </md-grid-tile>\n\n      </md-grid-list>\n\n    </md-card-content>\n\n\n    <md-card-actions>\n      <span class=\"spacer\"></span>\n      <button md-button routerLink=\"/alerts\">Cancel</button>\n      <button md-button class=\"mat-raised-button mat-primary\" routerLink=\"/alerts\">\n        Save\n      </button>\n    </md-card-actions>\n\n  </md-card>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/alert-details/alert-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertDetailsComponent = (function () {
    function AlertDetailsComponent() {
        this.users = ['Jonh Smith', 'Erick Brown', 'Gabe Newel', 'Bob Kallanick'];
        this.alertProviders = ['SMS', 'E-Mail', 'Phone'];
        this.pendantEventTypes = ['Blood Pressure', 'Oxygen', 'Weight', 'Heart Rate'];
        this.branches = ["aetiology", "bioengineering", "biomedicine", "biomedicine", "cardiology", "chiropody",
            "cytology", "dentistry", "dietetics", "embryology", "ENT", "epidemiology", "general practice", "genetics",
            "geriatrics", "gerontology", "GP", "gynaecology", "gynecology", "haematology", "hematology", "immunology",
            "medicine", "neurology", "neuroscience", "nutrition", "obstetrics", "oncology", "orthopaedics", "orthopedics",
            "paediatrics", "pathology", "pediatrics", "pharmacology", "pharmacy", "proctology", "radiology", "rheumatology",
            "urology", "virology"];
        this.facilities = ["Abortion clinic", "Acute care", "Adult daycare center", "Workplace safety in healthcare settings",
            "Ambulatory care", "Clinic", "Community health center", "Community Therapeutic Care", "Day hospital", "Doctor's office",
            "Free clinic", "Guided Care", "Healing environments", "Health facility", "Hospice", "Hospital", "Hospital ship",
            "Hospital train", "In absentia health care", "Inpatient care", "Isolation ward", "Long-term acute care facility",
            "Medical home", "Medical Respite Care", "Nurse-led clinic", "Nurse-managed health center", "Nursing home care",
            "Online pharmacy", "Outpatient clinic (hospital department)", "Patient hotel", "Person-centered care", "Polyclinic",
            "Primary healthcare", "Private healthcare", "Quarantine station", "Respite care", "Sanatorium", "Sexual health clinic",
            "Shipping container clinic", "Sick bay", "Surgicenter", "Telehomecare", "Therapeutic garden", "Transitional care",
            "Transmural care", "Urgent care", "Walk-in clinic", "Xenodochium"];
        this.patients = ['George Brown', 'Liam Larson', 'Alan Wake'];
    }
    AlertDetailsComponent.prototype.ngOnInit = function () {
    };
    return AlertDetailsComponent;
}());
AlertDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-alert-details',
        template: __webpack_require__("../../../../../src/app/alert-details/alert-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alert-details/alert-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AlertDetailsComponent);

//# sourceMappingURL=alert-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/alert-settings/alert-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section{\n  padding: 16px;\n}\n\nmd-card-actions{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alert-settings/alert-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <md-card class=\"user-list-card\">\n    <md-card-header>\n      <h1>Alert Settings</h1>\n    </md-card-header>\n\n    <md-form-field floatPlaceholder=\"never\">\n      <input mdInput #filter placeholder=\"Filter alerts\">\n    </md-form-field>\n\n    <md-card-content>\n      <md-table #table [dataSource]=\"dataSource\">\n\n        <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n        <md-row *mdRowDef=\"let row; columns: displayedColumns;\"></md-row>\n\n        <ng-container mdColumnDef=\"fullName\">\n          <md-header-cell *mdHeaderCellDef>Full Name</md-header-cell>\n          <md-cell *mdCellDef=\"let element\"> {{element.fullName}}</md-cell>\n        </ng-container>\n\n        <ng-container mdColumnDef=\"providers\">\n          <md-header-cell *mdHeaderCellDef>providers</md-header-cell>\n          <md-cell *mdCellDef=\"let element\"> {{element.providers}}</md-cell>\n        </ng-container>\n\n        <ng-container mdColumnDef=\"patientSelector\">\n          <md-header-cell *mdHeaderCellDef>patientSelector</md-header-cell>\n          <md-cell *mdCellDef=\"let element\"> {{element.patientSelector}}</md-cell>\n        </ng-container>\n\n        <ng-container mdColumnDef=\"action\">\n          <md-header-cell *mdHeaderCellDef></md-header-cell>\n          <md-cell *mdCellDef=\"let element\">\n            <button md-button>\n              <md-icon>mode_edit</md-icon>\n              Edit\n            </button>\n            <button md-button color=\"warn\">\n              <md-icon>delete</md-icon>\n              Remove\n            </button>\n          </md-cell>\n        </ng-container>\n\n      </md-table>\n\n      <md-paginator [length]=\"100\"\n                    [pageSize]=\"10\"\n                    [pageSizeOptions]=\"[5, 10, 25, 100]\">\n      </md-paginator>\n\n    </md-card-content>\n    <md-card-actions>\n      <span class=\"spacer\"></span>\n      <button md-button class=\"mat-raised-button mat-primary\" routerLink=\"/alerts/new\">\n        <md-icon>add_alert</md-icon>\n        Add Alert Setting\n      </button>\n    </md-card-actions>\n  </md-card>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/alert-settings/alert-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertSettingsComponent; });
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertSettingsComponent = (function () {
    function AlertSettingsComponent() {
        this.displayedColumns = ['fullName', 'providers', 'patientSelector', 'action'];
        this.dataSource = new ExampleDataSource();
    }
    AlertSettingsComponent.prototype.ngOnInit = function () {
    };
    return AlertSettingsComponent;
}());
AlertSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-alert-settings',
        template: __webpack_require__("../../../../../src/app/alert-settings/alert-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alert-settings/alert-settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AlertSettingsComponent);

var data = [
    {
        fullName: 'John Smith',
        providers: 'E-mail, SMS',
        patientSelector: 'Branch: Pharmacy',
    },
    {
        fullName: 'Angelina Joli',
        providers: 'SMS',
        patientSelector: 'All Patients',
    },
    {
        fullName: 'Brad Pit',
        providers: 'E-mail',
        patientSelector: 'Facility: Primary healthcare',
    },
];
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(data);
    };
    ExampleDataSource.prototype.disconnect = function () {
    };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=alert-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px;\n}\n\nmd-sidenav-container{\n  height: calc(100vh - 64px);\n}\n\n.app-sidenav{\n  width: 250px;\n\n}\n\n.example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<md-toolbar color=\"primary\">\n  <button type=\"button\" md-icon-button (click)=\"sidenav.toggle()\">\n    <md-icon class=\"md-24 mat-icon material-icons\">menu</md-icon>\n  </button>\n  <span>Med App</span>\n  <span class=\"spacer\"></span>\n  <md-icon class=\"example-icon\">user</md-icon>\n\n\n  <button md-button routerLink=\"/profile\">\n    <md-icon  class=\"md-24 mat-icon material-icons\">account_circle</md-icon>\n    John Doe\n  </button>\n\n  <button type=\"button\" md-icon-button>\n    <md-icon class=\"md-24 mat-icon material-icons\">settings</md-icon>\n  </button>\n</md-toolbar>\n\n\n<md-sidenav-container>\n  <md-sidenav #sidenav mode=\"side\" class=\"app-sidenav\">\n\n    <md-nav-list>\n      <md-list-item routerLink=\"/dashboard\" routerLinkActive=\"active\">\n        <md-icon mdListIcon>dashboard</md-icon>\n        Dashboard\n      </md-list-item>\n      <md-list-item routerLink=\"/alerts\" routerLinkActive=\"active\">\n        <md-icon mdListIcon>add_alert</md-icon>\n        Alert Settings\n      </md-list-item>\n      <md-list-item routerLink=\"/users\" routerLinkActive=\"active\">\n        <md-icon mdListIcon>face</md-icon>\n        Users\n      </md-list-item>\n      <md-list-item routerLink=\"/patients\" routerLinkActive=\"active\">\n        <md-icon mdListIcon>assignment_ind</md-icon>\n        Patients\n      </md-list-item>\n      <md-list-item routerLink=\"/profile\" routerLinkActive=\"active\">\n        <md-icon mdListIcon>account_circle</md-icon>\n        Profile\n      </md-list-item>\n      <md-list-item routerLink=\"/settings\" routerLinkActive=\"active\">\n        <md-icon mdListIcon>settings</md-icon>\n        Settings\n      </md-list-item>\n    </md-nav-list>\n\n  </md-sidenav>\n\n  <router-outlet></router-outlet>\n\n</md-sidenav-container>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_details_user_details_component__ = __webpack_require__("../../../../../src/app/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__under_construction_under_construction_component__ = __webpack_require__("../../../../../src/app/under-construction/under-construction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alert_settings_alert_settings_component__ = __webpack_require__("../../../../../src/app/alert-settings/alert-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alert_details_alert_details_component__ = __webpack_require__("../../../../../src/app/alert-details/alert-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__under_construction_under_construction_component__["a" /* UnderConstructionComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_6__user_list_user_list_component__["a" /* UserListComponent */] },
    { path: 'users/new', component: __WEBPACK_IMPORTED_MODULE_7__user_details_user_details_component__["a" /* UserDetailsComponent */] },
    { path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_7__user_details_user_details_component__["a" /* UserDetailsComponent */] },
    { path: 'patients', component: __WEBPACK_IMPORTED_MODULE_9__under_construction_under_construction_component__["a" /* UnderConstructionComponent */] },
    { path: 'patients/new', component: __WEBPACK_IMPORTED_MODULE_9__under_construction_under_construction_component__["a" /* UnderConstructionComponent */] },
    { path: 'patients/:id', component: __WEBPACK_IMPORTED_MODULE_9__under_construction_under_construction_component__["a" /* UnderConstructionComponent */] },
    { path: 'alerts', component: __WEBPACK_IMPORTED_MODULE_11__alert_settings_alert_settings_component__["a" /* AlertSettingsComponent */] },
    { path: 'alerts/new', component: __WEBPACK_IMPORTED_MODULE_12__alert_details_alert_details_component__["a" /* AlertDetailsComponent */] },
    { path: 'alerts/:id', component: __WEBPACK_IMPORTED_MODULE_12__alert_details_alert_details_component__["a" /* AlertDetailsComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_9__under_construction_under_construction_component__["a" /* UnderConstructionComponent */] },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__user_details_user_details_component__["a" /* UserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_9__under_construction_under_construction_component__["a" /* UnderConstructionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__alert_settings_alert_settings_component__["a" /* AlertSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__alert_details_alert_details_component__["a" /* AlertDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MdTableModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdFormFieldModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdPaginatorModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MdRadioModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>404</h1>\n<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  padding: 16px;\n\n  width: 100%;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\ntd{\n  padding: 10px;\n}\n\nmd-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nmd-form-field{\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\nmd-select{\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <md-card class=\"user-list-card \">\n\n    <md-card-title>\n      Profile\n    </md-card-title>\n\n    <md-card-subtitle>\n      <b>General Section</b>\n    </md-card-subtitle>\n\n\n    <md-card-content>\n      <form>\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <md-form-field>\n                <input mdInput placeholder=\"First Name\">\n              </md-form-field>\n            </td>\n            <td>\n              <md-form-field>\n                <input mdInput placeholder=\"Last Name\">\n              </md-form-field>\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <md-form-field>\n                <span mdPrefix>+1 &nbsp;</span>\n                <input type=\"tel\" mdInput placeholder=\"Telephone\">\n                <md-icon mdSuffix>local_phone</md-icon>\n              </md-form-field>\n            </td>\n            <td>\n              <md-form-field>\n                <input mdInput placeholder=\"E-Mail\">\n                <md-icon mdSuffix>email</md-icon>\n              </md-form-field>\n            </td>\n          </tr>\n        </table>\n      </form>\n    </md-card-content>\n\n    <md-card-subtitle>\n      <b>Security Section</b>\n    </md-card-subtitle>\n\n    <md-card-content>\n      <form>\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <md-form-field>\n                <input mdInput placeholder=\"Old Password\">\n              </md-form-field>\n            </td>\n            <td>\n              <md-form-field>\n                <input mdInput placeholder=\"New Password\">\n              </md-form-field>\n            </td>\n            <td>\n              <md-form-field>\n                <input mdInput placeholder=\"Confirm Password\">\n              </md-form-field>\n            </td>\n          </tr>\n        </table>\n      </form>\n    </md-card-content>\n\n    <md-card-actions>\n      <span class=\"spacer\"></span>\n      <button md-button routerLink=\"/\">Cancel</button>\n      <button md-button class=\"mat-raised-button mat-primary\" routerLink=\"/\">\n        Save\n      </button>\n    </md-card-actions>\n\n  </md-card>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/under-construction/under-construction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/under-construction/under-construction.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div>\n    <h1>\n      under-construction\n    </h1>\n    <p>\n      be patient...\n    </p>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/under-construction/under-construction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnderConstructionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnderConstructionComponent = (function () {
    function UnderConstructionComponent() {
    }
    UnderConstructionComponent.prototype.ngOnInit = function () {
    };
    return UnderConstructionComponent;
}());
UnderConstructionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-under-construction',
        template: __webpack_require__("../../../../../src/app/under-construction/under-construction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/under-construction/under-construction.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UnderConstructionComponent);

//# sourceMappingURL=under-construction.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-details/user-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  padding: 16px;\n\n  width: 100%;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\ntd{\n  padding: 10px;\n}\n\nmd-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\nmd-select{\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <md-card class=\"user-list-card \">\n    <md-card-header>\n      <h1>User Details</h1>\n    </md-card-header>\n    <md-card-content>\n\n      <form>\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <md-form-field>\n                <input mdInput placeholder=\"First Name\">\n              </md-form-field>\n            </td>\n            <td>\n              <md-form-field>\n                <input mdInput placeholder=\"Last Name\">\n              </md-form-field>\n            </td>\n            <td>\n              <md-form-field>\n                <input mdInput placeholder=\"Username\">\n              </md-form-field>\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <md-form-field>\n                <span mdPrefix>+1 &nbsp;</span>\n                <input type=\"tel\" mdInput placeholder=\"Telephone\">\n                <md-icon mdSuffix>local_phone</md-icon>\n              </md-form-field>\n            </td>\n            <td>\n              <md-form-field>\n                <span mdPrefix>+1 &nbsp;</span>\n                <input type=\"tel\" mdInput placeholder=\"Mobile Phone\">\n                <md-icon mdSuffix>smartphone</md-icon>\n              </md-form-field>\n            </td>\n            <td>\n              <md-form-field>\n                <input mdInput placeholder=\"E-Mail\">\n                <md-icon mdSuffix>email</md-icon>\n              </md-form-field>\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n                <md-select placeholder=\"Branch\">\n                  <md-option *ngFor=\"let item of branches\" [value]=\"item\">{{item}}</md-option>\n                </md-select>\n            </td>\n            <td>\n                <md-select placeholder=\"Facility\">\n                  <md-option *ngFor=\"let item of facilities\" [value]=\"item\">{{item}}</md-option>\n                </md-select>\n            </td>\n            <td>\n                <md-select placeholder=\"Role\">\n                  <md-option *ngFor=\"let item of roles\" [value]=\"item\">{{item}}</md-option>\n                </md-select>\n            </td>\n          </tr>\n\n        </table>\n\n      </form>\n\n    </md-card-content>\n    <md-card-actions>\n      <span class=\"spacer\"></span>\n      <button md-button routerLink=\"/users\">Cancel</button>\n      <button md-button class=\"mat-raised-button mat-primary\" routerLink=\"/users\">\n        Save\n      </button>\n    </md-card-actions>\n  </md-card>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = (function () {
    function UserDetailsComponent() {
        this.branches = ["aetiology", "bioengineering", "biomedicine", "biomedicine", "cardiology", "chiropody",
            "cytology", "dentistry", "dietetics", "embryology", "ENT", "epidemiology", "general practice", "genetics",
            "geriatrics", "gerontology", "GP", "gynaecology", "gynecology", "haematology", "hematology", "immunology",
            "medicine", "neurology", "neuroscience", "nutrition", "obstetrics", "oncology", "orthopaedics", "orthopedics",
            "paediatrics", "pathology", "pediatrics", "pharmacology", "pharmacy", "proctology", "radiology", "rheumatology",
            "urology", "virology"];
        this.facilities = ["Abortion clinic", "Acute care", "Adult daycare center", "Workplace safety in healthcare settings",
            "Ambulatory care", "Clinic", "Community health center", "Community Therapeutic Care", "Day hospital", "Doctor's office",
            "Free clinic", "Guided Care", "Healing environments", "Health facility", "Hospice", "Hospital", "Hospital ship",
            "Hospital train", "In absentia health care", "Inpatient care", "Isolation ward", "Long-term acute care facility",
            "Medical home", "Medical Respite Care", "Nurse-led clinic", "Nurse-managed health center", "Nursing home care",
            "Online pharmacy", "Outpatient clinic (hospital department)", "Patient hotel", "Person-centered care", "Polyclinic",
            "Primary healthcare", "Private healthcare", "Quarantine station", "Respite care", "Sanatorium", "Sexual health clinic",
            "Shipping container clinic", "Sick bay", "Surgicenter", "Telehomecare", "Therapeutic garden", "Transitional care",
            "Transmural care", "Urgent care", "Walk-in clinic", "Xenodochium"];
        this.roles = ["Anesthesiologist", "Anesthesiology Fellow", "Certified Registered Nurse Anesthetist",
            "Registered Respiratory Therapist", "Anesthesiologist Assistant", "Cardiologist", "Cardiology Fellow",
            "Intensivist", "Neonatologist", "Critical Care Nurse Practitioner", "Critical Care Registered Nurse",
            "Critical Care Respiratory Therapist", "Emergency physician", "Emergency Nurse Practitioner",
            "Emergency Physician Assistant", "Flight Nurse", "Registered Nurse", "Registered Respiratory Therapist",
            "Emergency Medical Technician", "Emergency Medical Technician", "Emergency Medical Technician",
            "Emergency Medical Technician", "Emergency Medical Technician", "Endocrinologist", "Geriatrician",
            "Gerontological Nurse Practitioner", "Gastroenterologist", "Haematologist", "Medical Laboratory Technician",
            "Phlebotomist", "Nephrologist", "Neurologist", "Oncologist", "Ophthamologist", "Otolaryngologist", "Pulmonologist",
            "Pulmonology Fellow", "Registered Respiratory Therapist", "Certified Respiratory Therapist", "General practitioner",
            "Family Practice Physician", "Internist", "Family Nurse Practitioner", "Physician Assistant", "Pharmacist",
            "Neonatalologist", "Pediatrician", "Neonatal Nurse Practitioner", "Pediatric Physician Assistant",
            "Pediatric Nurse Practitioner", "Pediatric Nurse", "Pediatric Respiratory Therapist", "Podiatric Surgeon",
            "Doctor of Podiatric Medicine", "Podiatrist", "Assistant Podiatrist", "Psychiatrist", "Psychologist",
            "Psychiatric Nurse Practitioner", "Mental Health Nurse Practitioner", "Orthopedic Physician", "Physical Therapist",
            "Occupational Therapist", "Physical Therapy Assistant", "Occupational Therapy Assistant", "Orthopaedic Technologist",
            "Chiropractor", "Athletic Trainer", "Radiotherapist", "Radiologist", "Radiographer", "CT Radiographer",
            "Interventional Radiographer", "Mammographer", "Neuroradiographer", "Medical Dosimetry Technologist",
            "Radiologist Practitioner Assistant", "Reporting Radiographer", "Sonographer", "Obstetrician",
            "Women's Health Nurse Practitioner", "Nurse-Midwife", "General Doctor", "Bariatric Surgeon",
            "Cardiothoracic surgeon", "Cardiac Surgeon", "Hepatic Biliary Pancreatic Surgeon", "Neurosurgeon",
            "Podiatric Surgeon", "Urologist"];
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-details',
        template: __webpack_require__("../../../../../src/app/user-details/user-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-details/user-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserDetailsComponent);

//# sourceMappingURL=user-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section{\n  padding: 16px;\n}\n\nmd-card-actions{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <md-card class=\"user-list-card\">\n    <md-card-header>\n      <h1>User List</h1>\n    </md-card-header>\n\n    <md-form-field floatPlaceholder=\"never\">\n      <input mdInput #filter placeholder=\"Filter users\">\n    </md-form-field>\n\n    <md-card-content>\n      <md-table #table [dataSource]=\"dataSource\">\n\n        <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n        <md-row *mdRowDef=\"let row; columns: displayedColumns;\"></md-row>\n\n        <ng-container mdColumnDef=\"name\">\n          <md-header-cell *mdHeaderCellDef>Name</md-header-cell>\n          <md-cell *mdCellDef=\"let element\"> {{element.name}}</md-cell>\n        </ng-container>\n\n        <ng-container mdColumnDef=\"role\">\n          <md-header-cell *mdHeaderCellDef>Role</md-header-cell>\n          <md-cell *mdCellDef=\"let element\"> {{element.role}}</md-cell>\n        </ng-container>\n\n        <ng-container mdColumnDef=\"email\">\n          <md-header-cell *mdHeaderCellDef>email</md-header-cell>\n          <md-cell *mdCellDef=\"let element\"> {{element.email}}</md-cell>\n        </ng-container>\n\n        <ng-container mdColumnDef=\"phone\">\n          <md-header-cell *mdHeaderCellDef>phone</md-header-cell>\n          <md-cell *mdCellDef=\"let element\"> {{element.phone}}</md-cell>\n        </ng-container>\n\n        <ng-container mdColumnDef=\"branch\">\n          <md-header-cell *mdHeaderCellDef>branch</md-header-cell>\n          <md-cell *mdCellDef=\"let element\"> {{element.branch}}</md-cell>\n        </ng-container>\n\n        <ng-container mdColumnDef=\"facility\">\n          <md-header-cell *mdHeaderCellDef>facility</md-header-cell>\n          <md-cell *mdCellDef=\"let element\"> {{element.facility}}</md-cell>\n        </ng-container>\n\n        <ng-container mdColumnDef=\"active\">\n          <md-header-cell *mdHeaderCellDef>active</md-header-cell>\n          <md-cell *mdCellDef=\"let element\">\n            <md-checkbox [checked]=\"element.active\" [disabled]=\"true\"></md-checkbox>\n          </md-cell>\n        </ng-container>\n\n        <ng-container mdColumnDef=\"action\">\n          <md-header-cell *mdHeaderCellDef>action</md-header-cell>\n          <md-cell *mdCellDef=\"let element\">\n            <button md-button>{{ element.active?'Activate':'Deactivate' }}</button>\n          </md-cell>\n        </ng-container>\n\n      </md-table>\n\n      <md-paginator [length]=\"100\"\n                    [pageSize]=\"10\"\n                    [pageSizeOptions]=\"[5, 10, 25, 100]\">\n      </md-paginator>\n\n    </md-card-content>\n    <md-card-actions>\n      <span class=\"spacer\"></span>\n      <button md-button>Make Report</button>\n      <button md-button class=\"mat-raised-button mat-primary\" routerLink=\"/users/new\">\n        Create User\n      </button>\n    </md-card-actions>\n  </md-card>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserListComponent = (function () {
    function UserListComponent() {
        this.displayedColumns = ['name', 'role', 'email', 'phone', 'branch', 'facility', 'active', 'action'];
        this.dataSource = new ExampleDataSource();
    }
    UserListComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            // if (!this.dataSource) { return; }
            // this.dataSource.filter = this.filter.nativeElement.value;
        });
    };
    return UserListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], UserListComponent.prototype, "filter", void 0);
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserListComponent);

var data = [
    {
        name: 'John Smith',
        role: 'Nurse',
        email: 'K.Smith@gmail.com',
        phone: '(541)-744-3010',
        branch: 'dentistry',
        facility: 'Acute care',
        active: true,
    },
    {
        name: 'Angelina Joli',
        role: 'Neurosurgeon',
        email: 'Angelina@gmail.com',
        phone: '(341)-744-3010',
        branch: 'immunology',
        facility: 'Isolation ward',
        active: false,
    },
    {
        name: 'Brad Pit',
        role: 'Cardiologist',
        email: 'Brad@gmail.com',
        phone: '(941)-744-3010',
        branch: 'urology',
        facility: 'Primary healthcare',
        active: true,
    },
];
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(data);
    };
    ExampleDataSource.prototype.disconnect = function () {
    };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map