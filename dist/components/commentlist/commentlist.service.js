"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CommentListService = (function () {
    function CommentListService() {
    }
    CommentListService.prototype.getComments = function () {
        var comments = [
            { text: "lorem ipsum bla stast gopher red samantha more info", author: "Samantha", image: "http://lorempixel.com/100/100/people?1", liked: false, likeCount: 2, parentId: "asdf", Id: "asdf" },
            { text: "lorem ipsum bla stast gopher red samantha more info", author: "Sam", image: "http://lorempixel.com/100/100/people?5", liked: true, likeCount: 5, parentId: "csdf", Id: "csdf" },
            { text: "lorem ipsum bla stast gopher red samantha more info", author: "Green", image: "http://lorempixel.com/100/100/people?6", liked: false, likeCount: 4, parentId: "gtdf", Id: "gstf" },
            { text: "lorem ipsum bla stast gopher red samantha more info", author: "Gopher", image: "http://lorempixel.com/100/100/people?4", liked: true, likeCount: 0, parentId: "mstf", Id: "csmf" }
        ];
        return comments;
    };
    return CommentListService;
}());
CommentListService = __decorate([
    core_1.Injectable()
], CommentListService);
exports.CommentListService = CommentListService;
//# sourceMappingURL=commentlist.service.js.map