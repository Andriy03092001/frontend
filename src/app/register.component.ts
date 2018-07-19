import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, Validator, Validators } from '@angular/forms';
@Component({
    selector: 'register',
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    
    form;
    constructor(private auth: AuthService, private fb: FormBuilder) { 

        this.form=fb.group({
            email:['',[Validators.required, Validators.email]],
            password:['',Validators.required]
        });
    }

    register(){
      console.log(this.form);
  }
}
