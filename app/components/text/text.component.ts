import {Component, Input, OnInit} from '@angular/core';
import {BasicComponent} from '../../models/BasicComponent';
import {TextService} from './text.service';
@Component({
    moduleId:'text',
    selector: 'text',
    templateUrl: 'app/components/text/text.component.html',
    styleUrls:['app/components/text/text.component.css']
})
export class TextComponent implements OnInit{
    text;
    class;
    constructor(private textService:TextService){}
    ngOnInit(){
        let content:BasicComponent=this.textService.getContent();
        this.text = content.content;
        this.class= content.class;
    }
}
