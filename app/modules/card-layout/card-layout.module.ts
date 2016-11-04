import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CardContainerComponent} from '../../components/card-container/card-container.component';
import {CardComponent} from '../../components/card/card.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
    imports:[BrowserModule, FormsModule, HttpModule, Ng2BootstrapModule],
    declarations:[CardContainerComponent, CardComponent],
    providers:[],
    bootstrap:[CardContainerComponent, CardComponent]
}) 
export class CardLayoutModule{}