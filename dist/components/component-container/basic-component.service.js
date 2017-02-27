"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BasicComponentService = (function () {
    function BasicComponentService() {
    }
    BasicComponentService.prototype.getComponents = function () {
        var components = [
            { type: "text", content: "bla lorem ipsum blady bla", parentId: "blasdf" },
            { type: "image", content: "http://lorempixel.com/300/300/people?5", parentId: "blasdf" },
            { type: "text", content: "bla lorem samantha pokemon", parentId: "ladf1", }
        ];
        return components;
    };
    return BasicComponentService;
}());
BasicComponentService = __decorate([
    core_1.Injectable()
], BasicComponentService);
exports.BasicComponentService = BasicComponentService;
//# sourceMappingURL=basic-component.service.js.map