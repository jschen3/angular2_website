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
var JumbotronService = (function () {
    function JumbotronService(http) {
        this.http = http;
    }
    JumbotronService.prototype.getJumbotron = function () {
        this.jumbotron = { id: "asdf", heading: "Jimmy Chen", text: "An Enterprising Sonftware Engineer", image: "/app/components/jumbotron/jimmy-chen-logo.png", link: "Read More" };
        return this.jumbotron;
    };
    return JumbotronService;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JumbotronService.prototype, "sourceUrl", void 0);
JumbotronService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JumbotronService);
exports.JumbotronService = JumbotronService;
//# sourceMappingURL=jumbotron.service.js.map