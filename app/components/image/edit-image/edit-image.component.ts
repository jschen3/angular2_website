import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../image.service';
@Component({
    moduleId:'edit-image-component',
    selector: 'edit-image-component',
    templateUrl: 'app/components/image/edit-image/edit-image.component.html',
    styleUrls:['app/components/image/edit-image/edit-image.component.css'],
    providers: [ImageService]
})
export class EditImageComponent implements OnInit{
    private editing:Boolean;
    @Input() image:string;
    @Input() uploadUrl:string;
    @Input() componentPath:string[];
    constructor(private imageService:ImageService){
        this.image = "images/edit-image.png"
        this.uploadUrl = "http://localhost:8080/images/index";
        this.componentPath=["aboutMeCard", "aboutMeImage"];
    }
    ngOnInit(){
        this.editing=false;
    }
    imageDoubleClicked(){
        this.editing=true;
    }
    fileUpload(event){
        this.imageService.uploadUrl=this.uploadUrl;
        this.imageService.uploadFile(this.componentPath, event.target.files[0]);
    }
}
