import {Component, OnInit} from '@angular/core';
@Component({
    moduleId:'signUpForm',
    selector:'signUpForm',
    templateUrl:'app/components/signup-form/signup-form.component.html',
    styleUrls:['app/components/signup-form/signup-form.component.css']
})

export class SignUpFormComponent implements OnInit{
    private firstName:String;
    private lastName:String;
    private userName:String;
    private email:String;
    private password:String;
    private confirmPassword:String;
    ngOnInit(){

    }
    constructor(){
    
    }
    submitSignUpForm(){
        
    }
}