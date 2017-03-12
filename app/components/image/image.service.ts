import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {BasicComponentContent} from '../../models/BasicComponentContent';
@Injectable()
export class ImageService{
     @Input() sourceUrl;
     private content:BasicComponentContent;
     constructor(private http:Http){
     }
    
     getContent():BasicComponentContent{
        //this.http.get(this.sourceUrl).map(res=>this.content=res.json());
        this.content={style: "", content: ""};
        return this.content;
    }
}