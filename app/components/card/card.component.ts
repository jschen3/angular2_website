import {Component, Input} from '@angular/core';
import {ComponentContainer} from '../../components/component-container/component-container';
@Component({
    moduleId:'card',
    selector:'card',
    templateUrl:'app/components/card/card.component.html',
    styleUrls:['app/components/card/card.component.css'],
})
export class CardComponent{
    @Input() sourceUrl;
    constructor(){}
}