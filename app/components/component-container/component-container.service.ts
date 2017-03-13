import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {BasicComponent} from '../../models/BasicComponent';

@Injectable()
export class ComponentContainerService {
	constructor(private http: Http){

	}
	@Input() sourceUrl;
	private components;
	getComponents():BasicComponent[]{
		this.http.get(this.sourceUrl).subscribe(res=>{
			this.components=res.json()
			console.log(this.components);
			return this.components;
		});
		return [];
		// let components:BasicComponent[]=[
		// {componentType: "text", sourceUrl: "http://textsourceurl" },
		// {componentType: "image", sourceUrl:"http://imageSourceUrl"},
		// {componentType: "card", sourceUrl:"http://cardSourceUrl"},
		// {componentType: "link", sourceUrl: "http://linksourceUrl"}];
		
	}
}