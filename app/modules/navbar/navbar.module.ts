import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NavbarComponent} from '../../components/navbar-container/navbar-container.component';
import {NavbarMenuComponent} from '../../components/navbar-menu/navbar-menu.component';
@NgModule({
    imports:[BrowserModule, FormsModule, HttpModule],
    declarations:[NavbarComponent, NavbarMenuComponent],
    providers:[],
    bootstrap:[NavbarComponent]
})
export class NavbarModule{

}
