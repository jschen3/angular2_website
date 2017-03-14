import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {BasicComponentContent} from '../../models/BasicComponentContent';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TitleService{
     @Input() sourceUrl;
     constructor(private http:Http){
     }
    
     getContent():Promise<BasicComponentContent>{
        return this.http.get(this.sourceUrl).toPromise().then(response => response.json().data as BasicComponentContent);
    }
}