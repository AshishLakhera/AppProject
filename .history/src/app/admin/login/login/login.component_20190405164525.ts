import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/Services/LoginServices/login.service';
import { loginModel } from 'src/app/Model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    loginmodel: loginModel;
  constructor(private loginservice: LoginService) { }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  ngOnInit() {
  }
  onSubmit() {
this.loginmodel.password = this.f.password.value;
this.loginmodel.userEmail = this.f.username.value;
    this.loginservice.loginUser(loginModel)

  }
}
