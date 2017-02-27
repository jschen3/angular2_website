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
var basic_component_service_1 = require("./basic-component.service");
var image_component_1 = require("../image/image.component");
var text_component_1 = require("../text/text.component");
var ComponentContainer = (function () {
    function ComponentContainer(componentFactoryResolver, basicComponentService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.basicComponentService = basicComponentService;
    }
    ComponentContainer.prototype.ngOnInit = function () {
        this.componentList = this.basicComponentService.getComponents();
        for (var _i = 0, _a = this.componentList; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component.type == "image") {
                var imageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(image_component_1.ImageComponent);
                var imageComponent = this.componentContainer.createComponent(imageComponentFactory);
                imageComponent.instance.image = component.content;
            }
            else if (component.type == "text") {
                var textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(text_component_1.TextComponent);
                var textComponent = this.componentContainer.createComponent(textComponentFactory);
                textComponent.instance.text = component.content;
            }
        }
    };
    return ComponentContainer;
}());
__decorate([
    core_1.ViewChild('componentContainer', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], ComponentContainer.prototype, "componentContainer", void 0);
ComponentContainer = __decorate([
    core_1.Component({
        moduleId: 'component-container',
        selector: 'component-container',
        template: '<div #componentContainer></div>',
        styleUrls: [],
        providers: [basic_component_service_1.BasicComponentService],
        entryComponents: [image_component_1.ImageComponent, text_component_1.TextComponent]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, basic_component_service_1.BasicComponentService])
], ComponentContainer);
exports.ComponentContainer = ComponentContainer;
//# sourceMappingURL=component-container.js.map