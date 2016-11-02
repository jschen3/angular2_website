import {Component, Input} from '@angular/core';

@Component({
	moduleId:'like',
	selector: 'like',
	templateUrl: 'app/components/like/like.component.html',
	styleUrls:['app/components/like/like.component.css']
})
export class LikeComponent {
	@Input() likeCount;
	@Input() liked;
	onClick(){
			this.likeCount++;
	}
}