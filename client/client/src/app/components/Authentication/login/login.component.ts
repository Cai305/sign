import { Component, OnInit } from  '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from  '../../../services/auth.service';

@Component({
selector:  'app-login',
templateUrl:  './login.component.html',
styleUrls: ['./login.component.scss']
})
export  class  LoginComponent  implements  OnInit {
    constructor(
      private  authService:  AuthService, 
      private router:Router) { }
    ngOnInit() {}

    profileForm = new FormGroup({
      displayName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.profileForm.value);
      this.authService.login(this.profileForm.value)
    }
    goToRegister(){
      this.router.navigate(['/register']);
    }

  
}
