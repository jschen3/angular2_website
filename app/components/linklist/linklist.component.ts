import {Component, OnInit} from '@angular/core';
import {Link} from '../../models/Link';
import {LinkListService} from './linklist.service';
@Component({
	selector:'navbar',
	templateUrl:'/app/components/linklist/linklist.component.html',
	providers:[LinkListService],
	styleUrls:['/app/components/linklist/linklist.component.css']
})
export class NavBarComponent implements OnInit{
	links: Link[] = [];
	constructor(private linklistService: LinkListService){}
	ngOnInit(): void{
		this.links=this.linklistService.getLinks();
		console.log(this.links);
	}
}