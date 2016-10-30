import {Injectable} from '@angular/core';
import {Link} from '../../models/Link';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NavbarMenuService {
	getLinks():Link[]{		
	  	let links:Link[]=[{text: "Home", url:"/"},
      					  {text: "Resume", url:"/resume"},
      					  {text: "About me", url:"/aboutme"},
     					  {text: "Projects", url:"/projects"}];
		return links;
	}
	
}
