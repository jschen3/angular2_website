import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import {NavbarMenuComponent} from '../../components/navbar-menu/navbar-menu.component';

@NgModule({
    imports:[BrowserModule, FormsModule, HttpModule, Ng2BootstrapModule],
    declarations:[NavbarMenuComponent],
    providers:[],
    bootstrap:[NavbarMenuComponent]
})
export class NavbarModule{

}
