"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SlideService = (function () {
    function SlideService() {
    }
    SlideService.prototype.getSlides = function () {
        var slides = [
            { title: "Slide title 1", image: "http://lorempixel.com/300/300/people?1", text: "lorem ipsum hello", link: "http://www.google.com" },
            { title: "Slide title 3", image: "http://lorempixel.com/300/300/people?3", text: "lorem ipsum hello", link: "http://www.google.com" },
            { title: "Slide title 2", image: "http://lorempixel.com/300/300/people?6", text: "lorem ipsum hello", link: "http://www.google.com" },
            { title: "Slide title 1", image: "http://lorempixel.com/300/300/people?9", text: "lorem ipsum hello", link: "http://www.google.com" }
        ];
        return slides;
    };
    return SlideService;
}());
SlideService = __decorate([
    core_1.Injectable()
], SlideService);
exports.SlideService = SlideService;
//# sourceMappingURL=slide.service.js.map