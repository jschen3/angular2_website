import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {BasicComponentContent} from '../../models/BasicComponentContent';
@Injectable()
export class TitleService{
     @Input() sourceUrl;
     private content:BasicComponentContent;
     constructor(private http:Http){
     }
    
     getContent():BasicComponentContent{
        this.http.get(this.sourceUrl).subscribe(res=>this.content=res.json());
        //this.content={style: "", content: ""};
        return this.content;
    }
}