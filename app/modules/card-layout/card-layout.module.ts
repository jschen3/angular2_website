import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CardContainerComponent} from '../../components/card-container/card-container.component';
import {CardComponent} from '../../components/card/card.component';
@NgModule({
    imports:[BrowserModule, FormsModule, HttpModule],
    declarations:[CardContainerComponent, CardComponent],
    providers:[],
    exports:[CardContainerComponent, CardComponent],
    bootstrap:[CardContainerComponent, CardComponent]
}) 
export class CardLayoutModule{}