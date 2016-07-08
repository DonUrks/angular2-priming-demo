import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES,REACTIVE_FORM_DIRECTIVES,Validators,FormControl,FormGroup } from '@angular/forms';
import { Button } from 'primeng/primeng';
import { NgForm }    from '@angular/common';
import { InputText } from 'primeng/primeng';
import { Panel } from 'primeng/primeng';

import { Login }    from './login';

@Component({
    selector: 'login-form',
    templateUrl: 'app/login-form/login-form.component.html',
    directives: [InputText,Panel,Button,REACTIVE_FORM_DIRECTIVES]
})
export class LoginFormComponent extends OnInit {
    loginForm: FormGroup;
    
    submitted = false;
    
    ngOnInit() {
        this.loginForm = new FormGroup({
            'login': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        });
    }
    
    onSubmit() { 
        this.submitted = true;
        alert(JSON.stringify(this.loginForm.value));
    }
}