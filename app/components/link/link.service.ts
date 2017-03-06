import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {Link} from '../../models/Link';
@Injectable()
export class LinkService{
     @Input() sourceUrl;
     private content:Link;
     constructor(private http:Http){
     }
    
     getContent():Link{
        //this.http.get(this.sourceUrl).map(res=>this.content=res.json());
        this.content={text: "", url: "", class:""};
        return this.content;
    }
}