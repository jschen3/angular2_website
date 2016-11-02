import {Component} from '@angular/core';
import {Comment} from '../../models/Comment';
import {CommentComponent} from '../comment/comment.component';
import {CommentListService} from './commentlist.service';

@Component({
	moduleId: 'commentlist',
	selector: 'commentlist',
	templateUrl:'app/components/commentlist/commentlist.component.html',
	providers:[CommentListService]
})
export class CommentListComponent {
	comments:Comment[];
	constructor(commentListService: CommentListService){
		this.comments=commentListService.getComments();
	}
}