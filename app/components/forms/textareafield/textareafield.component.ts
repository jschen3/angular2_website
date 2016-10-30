import {Component,Input, Output} from '@angular/core';
@Component({
    selector:'textareafield',
    templateUrl:'/app/components/forms/textareafield/textareafield.component.html'
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