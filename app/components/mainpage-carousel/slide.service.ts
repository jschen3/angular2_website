import {Injectable} from '@angular/core';
import {Slide} from '../../models/Slide';
@Injectable()
export class SlideService{
    getSlides():Slide[]{
        let slides:Slide[]=[
            {title:"Slide title 1", image:"http://lorempixel.com/300/300/people?1", text:"lorem ipsum hello", link: "http://www.google.com"},
            {title:"Slide title 3", image:"http://lorempixel.com/300/300/people?3", text:"lorem ipsum hello", link: "http://www.google.com"},
            {title:"Slide title 2", image:"http://lorempixel.com/300/300/people?6", text:"lorem ipsum hello", link: "http://www.google.com"},
            {title:"Slide title 1", image:"http://lorempixel.com/300/300/people?9", text:"lorem ipsum hello", link: "http://www.google.com"}
        ]
        return slides;
    }
}