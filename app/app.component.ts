import { Component } from '@angular/core';
import { Button } from 'primeng/primeng';
import { LoginFormComponent } from './login-form/login-form.component'

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    directives: [Button, LoginFormComponent]
})
export class AppComponent { 
   test() {
       
   }
}