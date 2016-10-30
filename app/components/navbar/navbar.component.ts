import {Component, OnInit} from '@angular/core';
import {Link} from '../../models/Link';
import {NavbarService} from './navbar.service';
@Component({
	selector:'navbar',
	templateUrl:'/app/components/navbar/navbar.component.html',
	providers:[NavbarService],
	styleUrls:['/app/components/navbar/navbar.component.css']
})
export class NavbarComponent implements OnInit{
	links: Link[] = [];
	constructor(private navbarService: NavbarService){}
	ngOnInit(): void{
		this.links=this.navbarService.getLinks();
		console.log(this.links);
	}
}