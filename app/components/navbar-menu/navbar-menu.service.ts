import {Injectable, Input} from '@angular/core';
import {Link} from '../../models/Link';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NavbarMenuService {
	constructor(private http: Http){}
	@Input() sourceUrl;
	private links:Link[];
	getLinks():Link[]{
		//this.http.get(this.sourceUrl).map(res => this.links=res.json());		
	  	this.links=[{text: "Home", url:"/"},
      					  {text: "Resume", url:"/resume"},
      					  {text: "About me", url:"/aboutme"},
     					  {text: "Projects", url:"/projects"}];
		return this.links;
	}
	
}
