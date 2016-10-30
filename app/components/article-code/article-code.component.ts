import {Component, Input} from '@angular/core';
@Component({
    selector:'article-code',
    templateUrl:'/app/components/article-code/article-code.component.html',
    styleUrls:['/app/components/article-code/article-code.component.css']
})
export class ArticleCodeComponent{
    @Input() code;
}
