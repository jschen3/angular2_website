import {Component, ComponentFactoryResolver, NgModule, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {BasicComponentService} from './basic-component.service';
import {BasicComponent} from '../../models/BasicComponent';
import {ArticleImageComponent} from '../article-image/article-image.component';
import {ArticleTextComponent} from '../article-text/article-text.component';
@Component({
    selector: 'component-container',
    template: '<div #componentContainer></div>',
    styleUrls:[],
    providers:[BasicComponentService],
    entryComponents:[ArticleImageComponent, ArticleTextComponent]
})
export class ComponentContainer implements OnInit{
    @ViewChild('componentContainer', {read:ViewContainerRef}) componentContainer: ViewContainerRef;
    private componentList:BasicComponent[];
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private basicComponentService:BasicComponentService ){}
    ngOnInit(){
        this.componentList=this.basicComponentService.getComponents();
        for(let component of this.componentList){
            if (component.type=="image"){
                let imageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ArticleImageComponent);
                let imageComponent = this.componentContainer.createComponent(imageComponentFactory);
                imageComponent.instance.image=component.content;
            }
            else if (component.type=="text"){
                let textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ArticleTextComponent);
                let textComponent = this.componentContainer.createComponent(textComponentFactory);
                textComponent.instance.text=component.content;
            }
        }
    }
}