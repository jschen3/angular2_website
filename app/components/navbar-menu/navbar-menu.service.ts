import {Injectable, Input} from '@angular/core';
import {Link} from '../../models/Link';
import {Http} from '@angular/http';

@Injectable()
export class NavbarMenuService {
	constructor(private http: Http){}
	@Input() sourceUrl;
	private links:Link[];
	getLinks():Link[]{
		//this.http.get(this.sourceUrl).map(res => this.links=res.json());		
	  	this.links=[{text: "Home", url:"/", class:"nav-link"},
      				{text: "Resume", url:"/resume",class:"nav-link"},
					{text: "Projects", url:"/projects", class:"nav-link"},
					{text: "About Me", url:"/aboutme", class:"nav-link"},
     				];
		return this.links;
	}
	
}
