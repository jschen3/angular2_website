import {Component, Input} from '@angular/core';

@Component({
    moduleId:'image',
    selector: 'image',
    templateUrl: 'app/components/image/image.component.html',
    styleUrls:['app/components/image/image.component.css']
})
export class ImageComponent{
    @Input() image;
}