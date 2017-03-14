import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../../models/Link';
import {LinkService} from './link.service';
@Component({
    moduleId:'link',
    selector: 'link',
    templateUrl: 'app/components/link/link.component.html',
    styleUrls:['app/components/link/link.component.css']
})
export class LinkComponent implements OnInit{
    @Input() sourceUrl;
    text;
    class;
    url;
    constructor(private linkService: LinkService){
        
    }
    ngOnInit(){
        this.linkService.getContent().then(content =>{
            this.text = content.text;
            this.class= content.style;
            this.url= content.url;
        });
    }
    
}