import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private  authService:  AuthService,
    private router: Router) { }
  ngOnInit() {}

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    //this.authService.login(this.profileForm.value)
    this.authService.register(this.profileForm.value)
  }

  goTOLogin() {
    this.router.navigate(['']);
  }

}
