import {Component, Input} from '@angular/core';

@Component({
    selector: 'article-image',
    templateUrl: '/app/components/article-image/article-image.component.html',
    styleUrls:['/app/components/article-image/article-image.component.css']
})
export class ArticleImageComponent{
    @Input() image;
}