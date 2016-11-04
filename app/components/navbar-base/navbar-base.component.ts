import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {NavbarMenuComponent} from '../navbar-menu/navbar-menu.component';

@Component({
    moduleId:'navbar',
    selector:'navbar',
    templateUrl:'app/components/navbar-base/navbar-base.component.html',
    styleUrls:['app/components/navbar-base/navbar-base.component.css'],
    entryComponents:[NavbarMenuComponent]
})
export class NavbarComponent implements OnInit{
    @ViewChild('navbarContainer', {read:ViewContainerRef}) navbarContainer:ViewContainerRef;
    constructor(private componentFactoryResolver: ComponentFactoryResolver){}
    ngOnInit(){
        let navbarMenuFactory = this.componentFactoryResolver.resolveComponentFactory(NavbarMenuComponent);
        this.navbarContainer.createComponent(navbarMenuFactory);
    }
}