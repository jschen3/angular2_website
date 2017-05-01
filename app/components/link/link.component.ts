import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../../models/Link';
import {LinkService} from './link.service';
@Component({
    moduleId:'link-component',
    selector: 'link-component',
    templateUrl: 'app/components/link/link.component.html',
    providers:[LinkService]
})
export class LinkComponent implements OnInit{
    @Input() sourceUrl;
    style;
    text;
    url;
    constructor(private linkService: LinkService){
        
    }
    ngOnInit(){
        this.linkService.sourceUrl=this.sourceUrl;
        this.linkService.getContent().then(content =>{
            this.text = content.content;
            this.style= content.style;
            this.url= content.linkUrl;
        });
    }
    
}