import {Component, Input} from '@angular/core';

@Component({
    selector: 'article-text',
    templateUrl: '/app/components/article-text/article-text.component.html',
    styleUrls:['/app/components/article-text/article-text.component.css']
})
export class ArticleTextComponent{
    @Input() text;
}
