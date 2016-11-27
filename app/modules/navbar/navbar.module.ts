import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import {NavbarComponent} from '../../components/navbar-base/navbar-base.component';
import {NavbarMenuComponent} from '../../components/navbar-menu/navbar-menu.component';
import {LoginDialogComponent} from '../../components/login-dialog/login-dialog.component';
import {LoginFormComponent} from '../../components/login-form/login-form.component';
import {SignUpFormComponent} from '../../components/signup-form/signup-form.component';
@NgModule({
    imports:[BrowserModule, FormsModule, HttpModule, Ng2BootstrapModule],
    declarations:[NavbarComponent, NavbarMenuComponent, LoginDialogComponent, LoginFormComponent, SignUpFormComponent],
    providers:[],
    bootstrap:[NavbarComponent]
})
export class NavbarModule{

}
