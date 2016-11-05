import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommentComponent} from '../../components/comment/comment.component';
import {CommentListComponent} from '../../components/commentlist/commentlist.component';

@NgModule({
    imports:[BrowserModule, FormsModule, HttpModule],
    declarations:[CommentListComponent,CommentComponent],
    providers:[],
    bootstrap:[CommentComponent, CommentListComponent]
})
export class CommentSectionModule{}
