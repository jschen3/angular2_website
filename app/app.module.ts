import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommentListComponent} from './components/commentlist/commentlist.component';
import {CommentListService} from './components/commentlist/commentlist.service';
import {CommentComponent} from './components/comment/comment.component';
import {LikeComponent} from './components/like/like.component';
import './rxjs-extensions';
import {ComponentContainer} from './components/component-container/component-container';
import {ArticleTextComponent} from './components/article-text/article-text.component';
import {ArticleImageComponent} from './components/article-image/article-image.component';
import {CardLayoutModule} from './modules/card-layout/card-layout.module';
import {CardContainerComponent} from './components/card-container/card-container.component';
import {CardComponent} from './components/card/card.component';
import {NavbarMenuComponent} from './components/navbar-menu/navbar-menu.component';
import {NavbarComponent} from './components/navbar-base/navbar-base.component';
import {NavbarModule} from './modules/navbar/navbar.module';
import {AboutMeJumbotronComponent} from './components/aboutme-jumbotron/aboutme-jumbotron.component';
 @NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CardLayoutModule,
    NavbarModule
  ],
  declarations: [
    CommentListComponent,
    CommentComponent,
    LikeComponent,
    ComponentContainer,
    ArticleImageComponent,
    ArticleTextComponent,
    AboutMeJumbotronComponent
  ],
  providers: [
  ],
  bootstrap: [ CardContainerComponent, NavbarComponent, AboutMeJumbotronComponent]
  //MainpageCarouselComponent, CommentListComponent, InputFieldComponent, SelectFieldComponent, TextAreaFieldComponent
})
export class AppModule {
}
