import {Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {LoginFormComponent} from '../login-form/login-form.component';
import {SignUpFormComponent} from '../signup-form/signup-form.component';
@Component({
    moduleId:'loginDialog',
    selector:'loginDialog',
    templateUrl:'app/components/login-dialog/login-dialog.component.html',
    styleUrls:['app/components/login-dialog/login-dialog.component.css'],
    entryComponents:[LoginFormComponent, SignUpFormComponent]
})

export class LoginDialogComponent implements OnInit{
    private loginModalFooterText:String;
    private loginModalFooterLink:String;
    private isLoginModalSignUp:boolean;
    private loginModalTitle:String;
    private signUpFactory;
    private loginFactory;
    @ViewChild('loginModalBody', {read:ViewContainerRef}) loginModalContainer:ViewContainerRef;
    constructor(private componentFactoryResolver:ComponentFactoryResolver){
        this.signUpFactory=this.componentFactoryResolver.resolveComponentFactory(SignUpFormComponent);
        this.loginFactory=this.componentFactoryResolver.resolveComponentFactory(LoginFormComponent);
    }
    ngOnInit(){
        this.loginModalFooterText="Don't have an account?";
        this.loginModalFooterLink="Sign up";
        this.isLoginModalSignUp=false;
        this.loginModalTitle="Login";
        this.loginModalContainer.createComponent(this.loginFactory);
    }
    
    loginModalFooterLinkClicked(){
        if (this.isLoginModalSignUp){
            this.isLoginModalSignUp=false;
            this.loginModalFooterText="Already have an account?";
            this.loginModalFooterLink="Login";
            this.loginModalTitle="Sign up"
            this.loginModalContainer.clear();
            this.loginModalContainer.createComponent(this.signUpFactory);
        }
        else{
            this.isLoginModalSignUp=true;
            this.loginModalFooterText="Don't have an account?";
            this.loginModalFooterLink="Sign up";
            this.loginModalTitle="Login";
            this.loginModalContainer.clear();
            this.loginModalContainer.createComponent(this.loginFactory);
        } 
    }
}