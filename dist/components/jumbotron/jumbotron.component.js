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
var Jumbotron_1 = require("../../models/Jumbotron");
var jumbotron_service_1 = require("./jumbotron.service");
var JumbotronComponent = (function () {
    function JumbotronComponent(jumbotronService) {
        this.jumbotronService = jumbotronService;
        this.jumbotron = jumbotronService.getJumbotron();
        console.log(this.jumbotron);
    }
    return JumbotronComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Jumbotron_1.Jumbotron)
], JumbotronComponent.prototype, "jumbotron", void 0);
JumbotronComponent = __decorate([
    core_1.Component({
        moduleId: 'Jumbotron',
        selector: 'jumbotron',
        templateUrl: 'app/components/jumbotron/jumbotron.component.html',
        styleUrls: ['app/components/jumbotron/jumbotron.component.css'],
        providers: [jumbotron_service_1.JumbotronService]
    }),
    __metadata("design:paramtypes", [jumbotron_service_1.JumbotronService])
], JumbotronComponent);
exports.JumbotronComponent = JumbotronComponent;
//# sourceMappingURL=jumbotron.component.js.map