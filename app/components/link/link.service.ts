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
        this.http.get(this.sourceUrl).subscribe(res=>{
            this.content=res.json();
            console.log("link:" + this.content);
			return this.content;
        });
        //this.content={text: "", url: "", style:""};
        return null;
    }
}