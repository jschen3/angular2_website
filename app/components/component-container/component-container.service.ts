import {Injectable, Input} from '@angular/core';
import {BasicComponent} from '../../models/BasicComponent';

@Injectable()
export class ComponentContainerService {
	@Input() sourceUrl;
	getComponents():BasicComponent[]{
		let components:BasicComponent[]=[
		{componentType: "text", sourceUrl: "http://textsourceurl" },
		{componentType: "image", sourceUrl:"http://imageSourceUrl"},
		{componentType: "card", sourceUrl:"http://cardSourceUrl"},
		{componentType: "link", sourceUrl: "http://linksourceUrl"}];
		return components;
	}
}