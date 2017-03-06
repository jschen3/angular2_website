import {Component, Input, OnInit} from '@angular/core';
import {BasicComponent} from '../../models/BasicComponent';
import {TitleService} from './title.service';
@Component({
    moduleId:'title',
    selector: 'title',
    templateUrl: 'app/components/title/title.component.html',
    styleUrls:['app/components/title/title.component.css']
})
export class TitleComponent implements OnInit{
    title;
    class;
    constructor(private titleService:TitleService){

    }
    ngOnInit(){
        let content:BasicComponent=this.titleService.getContent();
        this.title = content.content;
        this.class= content.class;
    }
}
