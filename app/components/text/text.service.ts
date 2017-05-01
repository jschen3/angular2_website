import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {BasicComponentContent} from '../../models/BasicComponentContent';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TextService{
     @Input() sourceUrl;
     @Input() uploadUrl;
     private content:BasicComponentContent;
     constructor(private http:Http){
     }
    
     getContent():Promise<BasicComponentContent>{
        return this.http.get(this.sourceUrl).toPromise().then(response => response.json() as BasicComponentContent);
     }
     
     uploadText(componentPath:string[], text:string):Promise<BasicComponentContent>{
        var form = new FormData();
        form.append("component", componentPath);
        form.append("text", text);
        return this.http.post(this.uploadUrl, form).toPromise().then(
            response => response.json() as BasicComponentContent
        );
     }
}