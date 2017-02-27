import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {NavbarMenuComponent} from '../navbar-menu/navbar-menu.component';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
@Component({
    moduleId:'navbar',
    selector:'navbar',
    templateUrl:'app/components/navbar-base/navbar-base.component.html',
    styleUrls:['app/components/navbar-base/navbar-base.component.css'],
    entryComponents:[NavbarMenuComponent, LoginDialogComponent]
})
export class NavbarComponent implements OnInit{
    @ViewChild('navbarContainer', {read:ViewContainerRef}) navbarContainer:ViewContainerRef;
    constructor(private componentFactoryResolver: ComponentFactoryResolver){}
    ngOnInit(){
        let navbarMenuFactory = this.componentFactoryResolver.resolveComponentFactory(NavbarMenuComponent);
        this.navbarContainer.createComponent(navbarMenuFactory);
    }
}