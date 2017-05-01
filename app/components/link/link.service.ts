import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {Link} from '../../models/Link';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LinkService{
     @Input() sourceUrl;
     private content:Link;
     constructor(private http:Http){
     }
    
    getContent():Promise<Link>{
        return this.http.get(this.sourceUrl).toPromise().then(response => response.json() as Link);	
    }

    
}