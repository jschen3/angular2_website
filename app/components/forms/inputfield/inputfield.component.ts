import {Component, Input, Output} from '@angular/core';
@Component({
    selector: 'inputfield',
    templateUrl:'/app/components/forms/inputfield/inputfield.component.html'
})
export class InputFieldComponent{
    @Input() fieldName;
    @Input() placeholder;
    @Input() type;
    @Output() value;
    constructor(){
        this.fieldName="Name";
        this.placeholder="Username";
        this.type="text";
        console.log("fieldName: "+this.fieldName);
        console.log("value: "+this.value);
        console.log("type: "+this.type);
        console.log("placeholder: " +this.placeholder);
    }
}