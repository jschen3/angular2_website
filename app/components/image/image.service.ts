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
     uploadFile(componentPath:string[], file:any):Promise<BasicComponentContent>{
        return new Promise((resolve, reject) =>{
            var headers:Headers = new Headers();
            headers.append('Content-Type', undefined); 
            var form = new FormData();
            form.append("component", componentPath);
            form.append("file", file, file.name);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if (xhr.readyState===4){
                    if (xhr.status===200)
                        resolve(JSON.parse(xhr.response));
                    else
                        reject(xhr.response);
                }
            }
            xhr.open("POST", this.uploadUrl, true);
            xhr.send(form);
        });
        
     }
}