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
var card_component_1 = require("../card/card.component");
var card_service_1 = require("./card.service");
var CardContainerComponent = (function () {
    function CardContainerComponent(componentFactoryResolver, cardService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cardService = cardService;
    }
    CardContainerComponent.prototype.ngOnInit = function () {
        this.cardList = this.cardService.getCards();
        console.log(this.cardList);
        for (var _i = 0, _a = this.cardList; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card != undefined) {
                var cardFactory = this.componentFactoryResolver.resolveComponentFactory(card_component_1.CardComponent);
                var cardComponent = this.cardContainer.createComponent(cardFactory);
                cardComponent.instance.card = card;
            }
        }
    };
    return CardContainerComponent;
}());
__decorate([
    core_1.ViewChild('cardContainer', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], CardContainerComponent.prototype, "cardContainer", void 0);
CardContainerComponent = __decorate([
    core_1.Component({
        moduleId: 'CardContainer',
        selector: 'cardcontainer',
        template: '<div class="container"> <div class="card-container" #cardContainer></div></div>',
        styleUrls: ['app/components/card-container/card-container.component.css'],
        providers: [card_service_1.CardService],
        entryComponents: [card_component_1.CardComponent]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, card_service_1.CardService])
], CardContainerComponent);
exports.CardContainerComponent = CardContainerComponent;
//# sourceMappingURL=card-container.component.js.map