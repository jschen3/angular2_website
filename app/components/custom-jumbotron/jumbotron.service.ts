import {Injectable, Input} from '@angular/core';
import {Http} from '@angular/http';
import {Jumbotron} from '../../models/Jumbotron';
import {BasicComponent} from '../../models/BasicComponent';

@Injectable()
export class JumbotronService{
    @Input sourceUrl;
    private jumbotron:Jumbotron;
    constructor(private http:Http){
        this.jumbotron.left=[{}];
        this.jumbotron.right=[{}];
        this.jumbotron.id="asdf";
    }
}