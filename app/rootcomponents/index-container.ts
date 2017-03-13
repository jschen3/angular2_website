import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {ComponentContainer} from '../components/component-container/component-container' ;

@Component({
    moduleId:'index-container',
    selector:'index-container',
    template: '<div #indexContainer></div>',
    styleUrls:[],
    entryComponents:[ComponentContainer]
})
export class IndexContainer implements OnInit{
    @ViewChild('indexContainer', {read:ViewContainerRef}) indexContainer:ViewContainerRef;
    constructor(private componentFactoryResolver:ComponentFactoryResolver){
    }
    ngOnInit(){
        let componentFactory=this.componentFactoryResolver.resolveComponentFactory(ComponentContainer);
        let componentContainer = this.indexContainer.createComponent(componentFactory);
        componentContainer.instance.sourceUrl="http://localhost:8080/index/rootContainer";
    }
}
