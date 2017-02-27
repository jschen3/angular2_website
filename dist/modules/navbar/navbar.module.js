"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var navbar_base_component_1 = require("../../components/navbar-base/navbar-base.component");
var navbar_menu_component_1 = require("../../components/navbar-menu/navbar-menu.component");
var login_dialog_component_1 = require("../../components/login-dialog/login-dialog.component");
var login_form_component_1 = require("../../components/login-form/login-form.component");
var signup_form_component_1 = require("../../components/signup-form/signup-form.component");
var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, ng2_bootstrap_1.Ng2BootstrapModule],
        declarations: [navbar_base_component_1.NavbarComponent, navbar_menu_component_1.NavbarMenuComponent, login_dialog_component_1.LoginDialogComponent, login_form_component_1.LoginFormComponent, signup_form_component_1.SignUpFormComponent],
        providers: [],
        bootstrap: [navbar_base_component_1.NavbarComponent]
    })
], NavbarModule);
exports.NavbarModule = NavbarModule;
//# sourceMappingURL=navbar.module.js.map