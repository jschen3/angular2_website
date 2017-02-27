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
var navbar_menu_component_1 = require("../navbar-menu/navbar-menu.component");
var login_dialog_component_1 = require("../login-dialog/login-dialog.component");
var NavbarComponent = (function () {
    function NavbarComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbarMenuFactory = this.componentFactoryResolver.resolveComponentFactory(navbar_menu_component_1.NavbarMenuComponent);
        this.navbarContainer.createComponent(navbarMenuFactory);
    };
    return NavbarComponent;
}());
__decorate([
    core_1.ViewChild('navbarContainer', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], NavbarComponent.prototype, "navbarContainer", void 0);
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: 'navbar',
        selector: 'navbar',
        templateUrl: 'app/components/navbar-base/navbar-base.component.html',
        styleUrls: ['app/components/navbar-base/navbar-base.component.css'],
        entryComponents: [navbar_menu_component_1.NavbarMenuComponent, login_dialog_component_1.LoginDialogComponent]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar-base.component.js.map