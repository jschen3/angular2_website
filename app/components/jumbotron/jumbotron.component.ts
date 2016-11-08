import {Component, Input} from '@angular/core';
import {Jumbotron} from '../../models/Jumbotron';
import {JumbotronService} from './jumbotron.service';
@Component({
    moduleId: 'Jumbotron',
    selector: 'jumbotron',
    templateUrl:'app/components/jumbotron/jumbotron.component.html',
    styleUrls:['app/components/jumbotron/jumbotron.component.css'],
    providers:[JumbotronService]
})
export class JumbotronComponent{
    @Input() jumbotron:Jumbotron;
    constructor(private jumbotronService:JumbotronService){
        this.jumbotron=jumbotronService.getJumbotron();
        console.log(this.jumbotron);
    }
}