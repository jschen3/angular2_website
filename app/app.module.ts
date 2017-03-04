import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommentListComponent} from './components/commentlist/commentlist.component';
import {CommentListService} from './components/commentlist/commentlist.service';
import {CommentComponent} from './components/comment/comment.component';
import {LikeComponent} from './components/like/like.component';
import {ComponentContainer} from './components/component-container/component-container';
import {TextComponent} from './components/text/text.component';
import {ImageComponent} from './components/image/image.component';
import {CardLayoutModule} from './modules/card-layout/card-layout.module';
import {CardContainerComponent} from './components/card-container/card-container.component';
import {CardComponent} from './components/card/card.component';
import {NavbarMenuComponent} from './components/navbar-menu/navbar-menu.component';
import {NavbarComponent} from './components/navbar-container/navbar-container.component';
import {NavbarModule} from './modules/navbar/navbar.module';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
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
    ImageComponent,
    TextComponent,
    JumbotronComponent
  ],
  providers: [
  ],
  bootstrap: [ CardContainerComponent, NavbarComponent, JumbotronComponent]
  //MainpageCarouselComponent, CommentListComponent, InputFieldComponent, SelectFieldComponent, TextAreaFieldComponent
})
export class AppModule {
}
