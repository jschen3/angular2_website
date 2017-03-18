import {Component, Input, OnInit} from '@angular/core';
import {BasicComponentContent} from '../../models/BasicComponentContent';
import {TitleService} from './title.service';
@Component({
    moduleId:'title',
    selector: 'title',
    templateUrl: 'app/components/title/title.component.html',
    styleUrls:['app/components/title/title.component.css'],
    providers:[TitleService]
})
export class TitleComponent implements OnInit{
    title;
    class;
    @Input() sourceUrl;
    constructor(private titleService:TitleService){

    }
    ngOnInit(){
        this.titleService.sourceUrl=this.sourceUrl;
        this.titleService.getContent().then(content =>{
            this.title = content.content;
            this.class = content.style;
        });
    }
}
