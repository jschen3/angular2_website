import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NavbarService} from './components/navbar/navbar.service';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CommentListComponent} from './components/commentlist/commentlist.component';
import {CommentListService} from './components/commentlist/commentlist.service';
import {CommentComponent} from './components/comment/comment.component';
import {LikeComponent} from './components/like/like.component';
import {InputFieldComponent} from './components/forms/inputfield/inputfield.component';
import {SelectFieldComponent} from './components/forms/selectfield/selectfield.component';
import {TextAreaFieldComponent} from './components/forms/textareafield/textareafield.component';
import {MainpageCarouselComponent} from './components/mainpage-carousel/mainpage-carousel.component';
import './rxjs-extensions';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import {ComponentContainer} from './components/component-container/component-container';
import {ArticleTextComponent} from './components/article-text/article-text.component';
import {ArticleImageComponent} from './components/article-image/article-image.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule
  ],
  declarations: [
    CommentListComponent,
    CommentComponent,
    LikeComponent,
    InputFieldComponent,
    SelectFieldComponent,
    TextAreaFieldComponent,
    MainpageCarouselComponent,
    ComponentContainer,
    ArticleImageComponent,
    ArticleTextComponent
  ],
  providers: [
    CommentListService
  ],
  bootstrap: [ ComponentContainer, MainpageCarouselComponent]
  //MainpageCarouselComponent, CommentListComponent, InputFieldComponent, SelectFieldComponent, TextAreaFieldComponent
})
export class AppModule {
}
