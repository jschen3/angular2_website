import {Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {ImageComponent} from '../image/image.component';
import {TextComponent} from '../text/text.component';
import {BasicComponent} from '../../models/BasicComponent';
import {JumbotronInput}
@Component({
    moduleId: 'CustomJumbotron',
    selector: 'customjumbotron',
    templateUrl:'app/components/custom-jumbotron/custom-jumbotron.component',
    providers:[JumbotronService],
    entryComponents:[ImageComponent, TextComponent]
})
export class CustomJumbotronComponent implements OnInit{
    @ViewChild('jumbotronLeft', {read:ViewContainerRef}) jumbotronLeft:ViewContainerRef;
    @ViewChild('jumbotronRight', {read:ViewContainerRef}) jumbotronRight:ViewContainerRef;
    private componentListLeft:BasicComponent[];
    private componentListRight:BasicComponent[];
    private jumbotron:JumbotronInput;
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private jumbotronService:jumbotronService ){}
    ngOnInit(){
        this.jumbotron=
    }
}