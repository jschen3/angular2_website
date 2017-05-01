import {Component, Input,Output} from '@angular/core';
@Component({
    moduleId:'selectfield',
    selector: 'selectfield',
    templateUrl:'app/components/forms/selectfield/selectfield.component.html'
})
export class SelectFieldComponent{
    @Input() options; 
    @Input() fieldName;
    @Output() value;

    constructor(){
        this.options=["daily","weekly","monthly"];
        this.fieldName="Frequency";
    }


}