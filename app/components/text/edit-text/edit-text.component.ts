import {Component, Input, OnInit} from '@angular/core';
import {TextService} from '../text.service';

@Component({
    moduleId: 'edit-text-component',
    selector: 'edit-text-component',
    templateurl: 'app/components/text/edit-text/edit-text.component.html',
    styleUrls:['app/components/text/edit-text/edit-text.component.css'],
    providers:[TextService]
})

export class EditTextComponent implements OnInit{
    private editing:Boolean;
    text:string;
    class:string;
    @Input() uploadUrl:string;
    @Input() componentPath:string[];
    constructor(private textService:TextService){}
    
    ngOnInit(){
        this.editing=false;
    }
    textDoubleClicked(){
        this.editing=true;
    }
    textUpload(){
        this.textService.uploadUrl = this.uploadUrl;
        /*
        this.textService.uploadText(this.componentPath, text).then(
            response=>{
                this.text=response.content;
                this.class=response.style;
            }
        )
        */
    }
}