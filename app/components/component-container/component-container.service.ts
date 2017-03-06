import {Injectable} from '@angular/core';
import {BasicComponent} from '../../models/BasicComponent';

@Injectable()
export class ComponentContainerService {
	getComponents():BasicComponent[]{
		let components:BasicComponent[]=[
		{type: "text", content:"bla lorem ipsum blady bla", parentId:"blasdf"},
		{type: "image", content:"http://lorempixel.com/300/300/people?5", parentId:"blasdf"},
		{type: "text", content:"bla lorem samantha pokemon", parentId:"ladf1",}]
		return components;
	}
}