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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var commentlist_component_1 = require('./components/commentlist/commentlist-component');
var commentlist_service_1 = require('./components/commentlist/commentlist-service');
var comment_component_1 = require('./components/comment/comment-component');
var like_component_1 = require('./components/like/like-component');
var inputfield_component_1 = require('./components/forms/inputfield/inputfield-component');
var selectfield_component_1 = require('./components/forms/selectfield/selectfield-component');
var textareafield_component_1 = require('./components/forms/textareafield/textareafield-component');
var mainpage_carousel_component_1 = require('./components/mainpage-carousel/mainpage-carousel-component');
require('./rxjs-extensions');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var component_container_1 = require('./components/component-container/component-container');
var article_text_component_1 = require('./components/article-text/article-text-component');
var article_image_component_1 = require('./components/article-image/article-image-component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_bootstrap_1.Ng2BootstrapModule
            ],
            declarations: [
                commentlist_component_1.CommentListComponent,
                comment_component_1.CommentComponent,
                like_component_1.LikeComponent,
                inputfield_component_1.InputFieldComponent,
                selectfield_component_1.SelectFieldComponent,
                textareafield_component_1.TextAreaFieldComponent,
                mainpage_carousel_component_1.MainpageCarouselComponent,
                component_container_1.ComponentContainer,
                article_image_component_1.ArticleImageComponent,
                article_text_component_1.ArticleTextComponent
            ],
            providers: [
                commentlist_service_1.CommentListService
            ],
            bootstrap: [component_container_1.ComponentContainer, mainpage_carousel_component_1.MainpageCarouselComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map