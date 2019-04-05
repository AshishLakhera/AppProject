import { Injectable } from '@angular/core';
import { loginModel } from 'src/app/Model/login.model';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
loginmodel: loginModel;
token;
headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpclient: HttpClient) { }
  loginUser(model) {
    this.httpclient.post('https://localhost:44371/api/Auth/login', model, {
      headers: this.headers
    }).subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
    });
  }
}
