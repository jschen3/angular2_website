import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {BasicComponentService} from './basic-component.service';
import {BasicComponent} from '../../models/BasicComponent';
import {ImageComponent} from '../image/image.component';
import {TextComponent} from '../text/text.component';
@Component({
    moduleId:'component-container',
    selector: 'component-container',
    template: '<div #componentContainer></div>',
    styleUrls:[],
    providers:[BasicComponentService],
    entryComponents:[ImageComponent, TextComponent]
})
export class ComponentContainer implements OnInit{
    @ViewChild('componentContainer', {read:ViewContainerRef}) componentContainer: ViewContainerRef;
    private componentList:BasicComponent[];
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private basicComponentService:BasicComponentService ){}
    ngOnInit(){
        this.componentList=this.basicComponentService.getComponents();
        for(let component of this.componentList){
            if (component.type=="image"){
                let imageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ImageComponent);
                let imageComponent = this.componentContainer.createComponent(imageComponentFactory);
                imageComponent.instance.image=component.content;
            }
            else if (component.type=="text"){
                let textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TextComponent);
                let textComponent = this.componentContainer.createComponent(textComponentFactory);
                textComponent.instance.text=component.content;
            }
        }
    }
}