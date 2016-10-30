import {Injectable} from '@angular/core';
import {Comment} from '../../models/Comment';

@Injectable()
export class CommentListService {
	getComments():Comment[]{
		let comments:Comment[]=[
			{text:"lorem ipsum bla stast gopher red samantha more info", author:"Samantha", image: "http://lorempixel.com/100/100/people?1",liked: false, likeCount: 2, parentId: "asdf", Id:"asdf"},
			{text:"lorem ipsum bla stast gopher red samantha more info", author:"Sam", image: "http://lorempixel.com/100/100/people?5",liked:true, likeCount: 5, parentId: "csdf", Id:"csdf"},
			{text:"lorem ipsum bla stast gopher red samantha more info", author:"Green", image: "http://lorempixel.com/100/100/people?6",liked: false, likeCount: 4, parentId: "gtdf", Id:"gstf"},
			{text:"lorem ipsum bla stast gopher red samantha more info", author:"Gopher", image: "http://lorempixel.com/100/100/people?4",liked:true, likeCount: 0, parentId: "mstf", Id:"csmf"}
		]
		return comments;
	}
}