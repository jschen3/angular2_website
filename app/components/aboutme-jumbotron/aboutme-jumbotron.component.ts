import {Component, Input} from '@angular/core';

@Component({
    moduleId: 'AboutMeJumbotron',
    selector: 'aboutmejumbotron',
    templateUrl:'app/components/aboutme-jumbotron/aboutme-jumbotron.component.html',
    styleUrls:['app/components/aboutme-jumbotron/aboutme-jumbotron.component.css']
})
export class AboutMeJumbotronComponent{
    @Input() heading:string;
    @Input() text:string;
    @Input() link:string;
    constructor(){
        this.heading="Jimmy Chen";
        this.text="An Enterprising Software Engineer";
        this.link="About me";
    }
}