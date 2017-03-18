import {Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {ComponentContainer} from '../../components/component-container/component-container';
import {CardContainerService} from './card-container.service';
import {BasicComponent} from '../../models/BasicComponent';
import {ImageComponent} from '../image/image.component';
import {TextComponent} from '../text/text.component';
import {LinkComponent} from '../link/link.component';
@Component({
    moduleId:'card',
    selector:'card',
    templateUrl:'app/components/card/card.component.html',
    styleUrls:['app/components/card/card.component.css'],
    providers:[CardContainerService],
    entryComponents:[ImageComponent, TextComponent, CardComponent, LinkComponent]
})
export class CardComponent implements OnInit {
    @Input() sourceUrl;
    @Input() style;
    private componentList:BasicComponent[];
    @ViewChild('cardContainer', {read:ViewContainerRef}) cardContainer: ViewContainerRef;
    constructor(private componentFactoryResolver:ComponentFactoryResolver, private componentService:CardContainerService){}
    ngOnInit() {
        this.componentService.sourceUrl=this.sourceUrl;   
        this.componentService.getComponents().then(
            res=> {
                this.componentList = res;
            for(let component of this.componentList){
                if (component.componentType=="image"){
                    let imageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ImageComponent);
                    let imageComponent = this.cardContainer.createComponent(imageComponentFactory);
                    imageComponent.instance.sourceUrl=component.sourceUrl;
                }
                else if (component.componentType=="text"){
                    let textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TextComponent);
                    let textComponent = this.cardContainer.createComponent(textComponentFactory);
                    textComponent.instance.sourceUrl=component.sourceUrl;
                }
                else if (component.componentType=="card"){
                    let cardComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CardComponent);
                    let cardComponent = this.cardContainer.createComponent(cardComponentFactory);
                    cardComponent.instance.sourceUrl = component.sourceUrl;
                }
                else if (component.componentType=="componentcontainer"){
                    let componentContainerFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentContainer);
                    let componentContainter = this.cardContainer.createComponent(componentContainerFactory);
                    componentContainter.instance.sourceUrl = component.sourceUrl;
                }
                else if (component.componentType=="link"){
                    let linkComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LinkComponent);
                    let linkComponent = this.cardContainer.createComponent(linkComponentFactory);
                    linkComponent.instance.sourceUrl = component.sourceUrl;
                }
            }
        });
        
    }

}