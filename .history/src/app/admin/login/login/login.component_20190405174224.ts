import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/Services/LoginServices/login.service';
import { loginModel } from 'src/app/Model/login.model';
import { Router } from '@angular/router';

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
    loginmodel: loginModel = new loginModel();
  constructor(private loginservice: LoginService, private router: Router) { }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  ngOnInit() {
  }
  onSubmit() {
    console.log('HelloSD');
    this.loginservice.loginUser(this.loginmodel);
  }
}
