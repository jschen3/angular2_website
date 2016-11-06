import {Component, Input} from '@angular/core';

@Component({
    moduleId:'text',
    selector: 'text',
    templateUrl: 'app/components/text/text.component.html',
    styleUrls:['app/components/text/text.component.css']
})
export class TextComponent{
    @Input() text;
}
