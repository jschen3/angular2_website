import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {RequestOptions} from '@angular/http';
import {Headers} from '@angular/http';
import {BasicComponentContent} from '../../models/BasicComponentContent';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ImageService{
     @Input() sourceUrl;
     @Input() uploadUrl;
     constructor(private http:Http){
     }
    
     getContent():Promise<BasicComponentContent>{
        return this.http.get(this.sourceUrl).toPromise().then(response => response.json() as BasicComponentContent);
    }
     uploadFile(componentPath:string[], file:any):Promise<any>{
        let headers:Headers = new Headers();
        headers.append('Content-Type', undefined); 
        let form = new FormData();
        form.append("component", componentPath);
        form.append("file", file);
        return this.http.post(this.uploadUrl, form, {headers: headers}).toPromise();
     }
}