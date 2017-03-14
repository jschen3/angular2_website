import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {BasicComponent} from '../../models/BasicComponent';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ComponentContainerService {
	constructor(private http: Http){

	}
	@Input() sourceUrl;
	private components;
	getComponents():Promise<BasicComponent[]> {
		return this.http.get(this.sourceUrl).toPromise().then(response => {
			let componentList=response.json().data as BasicComponent[];
			console.log(componentList);
			return componentList;
		});		
	}

}