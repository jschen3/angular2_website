import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {Card} from '../../models/Card';
import {CardComponent} from '../card/card.component';
import {CardService} from './card.service';

@Component({
    moduleId: 'CardContainer',
    selector: 'cardcontainer',
    template:'<div #cardContainer></div>',
    providers:[CardService],
    entryComponents:[CardComponent]
})
export class CardContainerComponent implements OnInit{
    @ViewChild('cardContainer', {read:ViewContainerRef}) cardContainer:ViewContainerRef;
    private cardList:Card[];
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private cardService:CardService){}
    ngOnInit(){
        this.cardList=this.cardService.getCards();
        console.log(this.cardList);
        for (let card of this.cardList){
            if (card!=undefined){            
                let cardFactory=this.componentFactoryResolver.resolveComponentFactory(CardComponent);
                let cardComponent = this.cardContainer.createComponent(cardFactory);
                cardComponent.instance.card = card; 
            }           
        }
    }

}