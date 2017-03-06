import {Component, Input, OnInit} from '@angular/core';
import {BasicComponent} from '../../models/BasicComponent';
import {ImageService} from './image.service';
@Component({
    moduleId:'image',
    selector: 'image',
    templateUrl: 'app/components/image/image.component.html',
    styleUrls:['app/components/image/image.component.css']
})
export class ImageComponent implements OnInit{
    image;
    class;
    constructor(private imageService: ImageService){
        
    }
    ngOnInit(){
        let content:BasicComponent=this.imageService.getContent();
        this.image = content.content;
        this.class= content.class;
    }
    
}