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
var CardService = (function () {
    function CardService(http) {
        this.http = http;
    }
    CardService.prototype.getCards = function () {
        //this.http.get(this.sourceUrl).map(res=>this.cards=res.json());
        this.cards = [
            { cardId: "asdf", image: "http://lorempixel.com/200/200/people/?2", title: "Title Banana", text: "lorem ipsum bla stast gopher red samantha more info", link: "Read More" },
            { cardId: "asfd", image: "http://lorempixel.com/200/200/people/?3", title: "Title Banana", text: "lorem ipsum bla red samantha tast gophermore info", link: "Read More" },
            { cardId: "fasd", image: "http://lorempixel.com/200/200/people/?5", title: "Title Banana", text: "lorem ipsum bla stast gopher red samantha more info", link: "Read More" },
            { cardId: "afsd", image: "http://lorempixel.com/200/200/people/?6", title: "Title Banana", text: "lorem ipsum bla red samantha more stast gopher info", link: "Read More" }
        ];
        return this.cards;
    };
    return CardService;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CardService.prototype, "sourceUrl", void 0);
CardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map