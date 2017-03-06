import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {BasicComponent} from '../../models/BasicComponent';
@Injectable()
export class ImageService{
     @Input() sourceUrl;
     private content:BasicComponent;
     constructor(private http:Http){
     }
    
     getContent():BasicComponent{
        //this.http.get(this.sourceUrl).map(res=>this.content=res.json());
        this.content={class: "", content: ""};
        return this.content;
    }
}