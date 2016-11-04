import {Component, Input} from '@angular/core';

@Component({
    moduleId:'card',
    selector:'card',
    templateUrl:'app/components/card/card.component.html',
    styleUrls:['app/components/card/card.component.css']
})
export class CardComponent{
    @Input() card;
    constructor(){}
}