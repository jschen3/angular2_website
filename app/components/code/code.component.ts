import {Component, Input} from '@angular/core';
@Component({
    moduleId:'code',
    selector:'code',
    templateUrl:'app/components/code/code.component.html',
    styleUrls:['app/components/code/code.component.css']
})
export class CodeComponent{
    @Input() code;
}
