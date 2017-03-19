import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from './image.service';
import {BasicComponentContent} from '../../models/BasicComponentContent';
@Component({
    moduleId:'image-component',
    selector: 'image-component',
    templateUrl: 'app/components/image/image.component.html',
    styleUrls:['app/components/image/image.component.css'],
    providers: [ImageService]
})
export class ImageComponent implements OnInit{
    @Input() sourceUrl
    @Input() style
    image;
    constructor(private imageService: ImageService){
        
    }
    ngOnInit(){
        this.imageService.sourceUrl=this.sourceUrl;
        this.imageService.getContent().then(content=>{
            this.image = content.content;
            this.style = content.style;
        });
    }
    
}