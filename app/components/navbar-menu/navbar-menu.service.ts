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
	  	this.links=[{content: "Home", linkUrl:"/", style:"nav-link"},
      				{content: "Resume", linkUrl:"/resume",style:"nav-link"},
					{content: "Projects", linkUrl:"/projects", style:"nav-link"},
					{content: "About Me", linkUrl:"/aboutme", style:"nav-link"},
     				];
		return this.links;
	}
	
}
