import {Component, Input, OnInit} from '@angular/core';
import {Slide} from '../../models/Slide';
import {SlideService} from './slide.service';
@Component({
    selector: 'mainpage-carousel',
    templateUrl:'/app/components/mainpage-carousel/mainpage-carousel.component.html',
    providers:[SlideService],
    styleUrls:['/app/components/mainpage-carousel/mainpage-carousel.component.css']
})
export class MainpageCarouselComponent implements OnInit{
    @Input() slides:Slide[];
    public myInterval:number=-1;
    public noWrapSlides:boolean=false;
    constructor(private slideService:SlideService){}
    ngOnInit(){
        this.slides=this.slideService.getSlides();
    }
}