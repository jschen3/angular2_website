import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {Jumbotron} from '../../models/jumbotron';
@Injectable()
export class JumbotronService{
    @Input() sourceUrl;
    private jumbotron:Jumbotron;
    constructor(private http:Http){
    }
    getJumbotron():Jumbotron{
        this.jumbotron={id:"asdf", heading: "Jimmy Chen", text:"An Enterprising Sonftware Engineer", image: "/app/components/jumbotron/jimmy-chen-logo.png", link: "Read More"};
        return this.jumbotron;    
    }
}