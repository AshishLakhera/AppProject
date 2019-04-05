import { Injectable } from '@angular/core';
import { loginModel } from 'src/app/Model/login.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
loginmodel: loginModel;
token;
invalidLogin: boolean;
headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpclient: HttpClient, private router: Router) { }
  loginUser(model) {
    return this.httpclient.post('https://localhost:44371/api/Auth/login', model, {
      headers: this.headers
    }).subscribe(response => {
      this.token = (<any>response).token;
      localStorage.setItem('jwt', this.token);
      this.invalidLogin = false;
      this.router.navigate(['employeeList']);
    }, err => {
      this.invalidLogin = true;
    });
    return model;
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('jwt');
}
}
