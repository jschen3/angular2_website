import {Component, Input} from '@angular/core';
@Component({
	selector: 'comment',
	templateUrl:'/app/components/comment/comment.component.html',
	styleUrls:['/app/components/comment/comment.component.css']
})
export class CommentComponent {
	@Input() comment;
	constructor(){
		console.log(this.comment);
	}
}