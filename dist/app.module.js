"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var commentlist_component_1 = require("./components/commentlist/commentlist.component");
var comment_component_1 = require("./components/comment/comment.component");
var like_component_1 = require("./components/like/like.component");
var component_container_1 = require("./components/component-container/component-container");
var text_component_1 = require("./components/text/text.component");
var image_component_1 = require("./components/image/image.component");
var card_layout_module_1 = require("./modules/card-layout/card-layout.module");
var card_container_component_1 = require("./components/card-container/card-container.component");
var navbar_base_component_1 = require("./components/navbar-base/navbar-base.component");
var navbar_module_1 = require("./modules/navbar/navbar.module");
var jumbotron_component_1 = require("./components/jumbotron/jumbotron.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            card_layout_module_1.CardLayoutModule,
            navbar_module_1.NavbarModule
        ],
        declarations: [
            commentlist_component_1.CommentListComponent,
            comment_component_1.CommentComponent,
            like_component_1.LikeComponent,
            component_container_1.ComponentContainer,
            image_component_1.ImageComponent,
            text_component_1.TextComponent,
            jumbotron_component_1.JumbotronComponent
        ],
        providers: [],
        bootstrap: [card_container_component_1.CardContainerComponent, navbar_base_component_1.NavbarComponent, jumbotron_component_1.JumbotronComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map