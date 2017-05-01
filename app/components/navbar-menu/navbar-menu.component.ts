import {Component, OnInit} from '@angular/core';
import {Link} from '../../models/Link';
import {NavbarMenuService} from './navbar-menu.service';
@Component({
	moduleId:'navbar-menu',
	selector:'navbar-menu',
	templateUrl:'app/components/navbar-menu/navbar-menu.component.html',
	providers:[NavbarMenuService],
	styleUrls:['app/components/navbar-menu/navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit{
	links: Link[] = [];
	constructor(private navbarService: NavbarMenuService){}
	ngOnInit(): void{
		this.links=this.navbarService.getLinks();
		console.log(this.links);
	}
}