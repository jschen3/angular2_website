import {Component,Input, Output} from '@angular/core';
@Component({
    moduleId:'textareafield',
    selector:'textareafield',
    templateUrl:'app/components/form/textareafield/textareafield.component.html'
})
export class TextAreaFieldComponent{
    @Input() fieldName;
    @Input() placeholder;
    @Output() value;
    constructor(){
        this.fieldName="Body";
        this.placeholder="Body Text";
    }
}