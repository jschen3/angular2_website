"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var login_form_component_1 = require("../login-form/login-form.component");
var signup_form_component_1 = require("../signup-form/signup-form.component");
var LoginDialogComponent = (function () {
    function LoginDialogComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.signUpFactory = this.componentFactoryResolver.resolveComponentFactory(signup_form_component_1.SignUpFormComponent);
        this.loginFactory = this.componentFactoryResolver.resolveComponentFactory(login_form_component_1.LoginFormComponent);
    }
    LoginDialogComponent.prototype.ngOnInit = function () {
        this.loginModalFooterText = "Don't have an account?";
        this.loginModalFooterLink = "Sign up";
        this.isLoginModalSignUp = false;
        this.loginModalTitle = "Login";
        this.loginModalContainer.createComponent(this.loginFactory);
    };
    LoginDialogComponent.prototype.loginModalFooterLinkClicked = function () {
        if (this.isLoginModalSignUp) {
            this.isLoginModalSignUp = false;
            this.loginModalFooterText = "Already have an account?";
            this.loginModalFooterLink = "Login";
            this.loginModalTitle = "Sign up";
            this.loginModalContainer.clear();
            this.loginModalContainer.createComponent(this.signUpFactory);
        }
        else {
            this.isLoginModalSignUp = true;
            this.loginModalFooterText = "Don't have an account?";
            this.loginModalFooterLink = "Sign up";
            this.loginModalTitle = "Login";
            this.loginModalContainer.clear();
            this.loginModalContainer.createComponent(this.loginFactory);
        }
    };
    return LoginDialogComponent;
}());
__decorate([
    core_1.ViewChild('loginModalBody', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], LoginDialogComponent.prototype, "loginModalContainer", void 0);
LoginDialogComponent = __decorate([
    core_1.Component({
        moduleId: 'loginDialog',
        selector: 'loginDialog',
        templateUrl: 'app/components/login-dialog/login-dialog.component.html',
        styleUrls: ['app/components/login-dialog/login-dialog.component.css'],
        entryComponents: [login_form_component_1.LoginFormComponent, signup_form_component_1.SignUpFormComponent]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], LoginDialogComponent);
exports.LoginDialogComponent = LoginDialogComponent;
//# sourceMappingURL=login-dialog.component.js.map