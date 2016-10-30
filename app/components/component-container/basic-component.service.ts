import {Injectable} from '@angular/core';
import {BasicComponent} from '../../models/BasicComponent';

@Injectable()
export class BasicComponentService {
	getComponents():BasicComponent[]{
		let components:BasicComponent[]=[
		{type: "text", content:"bla lorem ipsum blady bla"},
		{type: "image", content: "http://lorempixel.com/300/300/people?5"},
		{type: "text", content: "bla lorem samantha pokemon"}]
		return components;
	}
}