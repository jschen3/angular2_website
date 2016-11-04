import {Injectable, Input} from '@angular/core';
import {Card} from '../../models/Card';
import {Http} from '@angular/http';


@Injectable()
export class CardService{
    @Input() sourceUrl;
    private cards:Card[];
    constructor(private http:Http){}
    getCards():Card[]{
        //this.http.get(this.sourceUrl).map(res=>this.cards=res.json());
        this.cards=[
            {cardId: "asdf", image: "http://lorempixel.com/200/200/people/?2", title: "Title Banana", text:"lorem ipsum bla stast gopher red samantha more info", link: "Read More"},
            {cardId: "asfd", image: "http://lorempixel.com/200/200/people/?3", title: "Title Banana", text:"lorem ipsum bla red samantha tast gophermore info", link: "Read More"},
            {cardId: "fasd", image: "http://lorempixel.com/200/200/people/?5", title: "Title Banana", text:"lorem ipsum bla stast gopher red samantha more info", link: "Read More"},
            {cardId: "afsd", image: "http://lorempixel.com/200/200/people/?6", title: "Title Banana", text:"lorem ipsum bla red samantha more stast gopher info", link: "Read More"}];
        return this.cards;
    }
}