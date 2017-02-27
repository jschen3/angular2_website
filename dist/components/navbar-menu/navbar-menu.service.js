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
var http_1 = require("@angular/http");
var NavbarMenuService = (function () {
    function NavbarMenuService(http) {
        this.http = http;
    }
    NavbarMenuService.prototype.getLinks = function () {
        //this.http.get(this.sourceUrl).map(res => this.links=res.json());		
        this.links = [{ text: "Home", url: "/" },
            { text: "Resume", url: "/resume" },
            { text: "Projects", url: "/projects" },
            { text: "About Me", url: "/aboutme" },
        ];
        return this.links;
    };
    return NavbarMenuService;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NavbarMenuService.prototype, "sourceUrl", void 0);
NavbarMenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NavbarMenuService);
exports.NavbarMenuService = NavbarMenuService;
//# sourceMappingURL=navbar-menu.service.js.map