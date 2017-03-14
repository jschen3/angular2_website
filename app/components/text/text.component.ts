import {Component, Input, OnInit} from '@angular/core';
import {BasicComponentContent} from '../../models/BasicComponentContent';
import {TextService} from './text.service';
@Component({
    moduleId:'text',
    selector: 'text',
    templateUrl: 'app/components/text/text.component.html',
    styleUrls:['app/components/text/text.component.css'],
    providers:[TextService]
})
export class TextComponent implements OnInit{
    @Input() sourceUrl
    text;
    class;
    constructor(private textService:TextService){}
    ngOnInit(){
        this.textService.getContent().then(content => {
            this.text= content.content;
            this.class = content.style;
        });
    }
}
