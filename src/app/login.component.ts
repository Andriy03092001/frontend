import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, Validator, Validators } from '@angular/forms';
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    
    form;
    constructor(private auth: AuthService, private fb: FormBuilder) { 

        this.form=fb.group({
            email:['',[Validators.required, Validators.email]],
            password:['',Validators.required]
        });
    }
}
