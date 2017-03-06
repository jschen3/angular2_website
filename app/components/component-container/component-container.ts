import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {ComponentContainerService} from './component-container.service';
import {BasicComponent} from '../../models/BasicComponent';
import {ImageComponent} from '../image/image.component';
import {TextComponent} from '../text/text.component';
import {CardComponent} from '../card/card.component';
import {LinkComponent} from '../link/link.component';

@Component({
    moduleId:'component-container',
    selector: 'component-container',
    template: '<div #componentContainer></div>',
    styleUrls:[],
    providers:[ComponentContainerService],
    entryComponents:[ImageComponent, TextComponent, CardComponent]
})
export class ComponentContainer implements OnInit{
    @ViewChild('componentContainer', {read:ViewContainerRef}) componentContainer: ViewContainerRef;
    private componentList:BasicComponent[];
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private componentService:ComponentContainerService ){}
    ngOnInit(){
        this.componentList=this.componentService.getComponents();
        for(let component of this.componentList){
            if (component.componentType=="image"){
                let imageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ImageComponent);
                let imageComponent = this.componentContainer.createComponent(imageComponentFactory);
                imageComponent.instance.sourceUrl=component.sourceUrl;
            }
            else if (component.componentType=="text"){
                let textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TextComponent);
                let textComponent = this.componentContainer.createComponent(textComponentFactory);
                textComponent.instance.sourceUrl=component.sourceUrl;
            }
            else if (component.componentType=="card"){
                let cardComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CardComponent);
                let cardComponent = this.componentContainer.createComponent(cardComponentFactory);
                cardComponent.instance.sourceUrl = component.sourceUrl;
            }
        }
    }
}