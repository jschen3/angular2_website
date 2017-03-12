import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from './image.service';
import {BasicComponentContent} from '../../models/BasicComponentContent';
@Component({
    moduleId:'image',
    selector: 'image',
    templateUrl: 'app/components/image/image.component.html',
    styleUrls:['app/components/image/image.component.css'],
    providers: [ImageService]
})
export class ImageComponent implements OnInit{
    @Input() sourceUrl
    image;
    class;
    constructor(private imageService: ImageService){
        
    }
    ngOnInit(){
        this.imageService.sourceUrl = this.sourceUrl;
        let content:BasicComponentContent=this.imageService.getContent();
        this.image = content.content;
        this.class= content.style;
    }
    
}