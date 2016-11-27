import {Component, OnInit} from '@angular/core'
@Component({
    moduleId:'loginForm',
    selector:'loginForm',
    templateUrl:'app/components/login-form/login-form.component.html',
    styleUrls:['app/components/login-form/login-form.component.css']
})

export class LoginFormComponent implements OnInit{
    private username:String;
    private password:String;
    constructor(){

    }
    ngOnInit(){

    }
    submitLoginForm(){
        console.log(this.username);
        console.log(this.password);
    }
}
