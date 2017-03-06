import {Injectable} from '@angular/core';
import {BasicComponent} from '../../models/BasicComponent';

@Injectable()
export class ComponentContainerService {
	getComponents():BasicComponent[]{
		let components:BasicComponent[]=[
		{componentType: "text", sourceUrl: "http://textsourceurl" },
		{componentType: "image", sourceUrl:"http://imageSourceUrl"},
		{componentType: "card", sourceUrl:"http://cardSourceUrl"},
		{componentType: "link", sourceUrl: "http://linksourceUrl"}];
		return components;
	}
}