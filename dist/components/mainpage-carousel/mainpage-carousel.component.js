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
var slide_service_1 = require("./slide.service");
var MainpageCarouselComponent = (function () {
    function MainpageCarouselComponent(slideService) {
        this.slideService = slideService;
        this.myInterval = -1;
        this.noWrapSlides = false;
    }
    MainpageCarouselComponent.prototype.ngOnInit = function () {
        this.slides = this.slideService.getSlides();
    };
    return MainpageCarouselComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MainpageCarouselComponent.prototype, "slides", void 0);
MainpageCarouselComponent = __decorate([
    core_1.Component({
        selector: 'mainpage-carousel',
        templateUrl: '/app/components/mainpage-carousel/mainpage-carousel.component.html',
        providers: [slide_service_1.SlideService],
        styleUrls: ['/app/components/mainpage-carousel/mainpage-carousel.component.css']
    }),
    __metadata("design:paramtypes", [slide_service_1.SlideService])
], MainpageCarouselComponent);
exports.MainpageCarouselComponent = MainpageCarouselComponent;
//# sourceMappingURL=mainpage-carousel.component.js.map