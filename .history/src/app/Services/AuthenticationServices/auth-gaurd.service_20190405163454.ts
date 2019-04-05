import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
token;
  constructor(private jwtHelper: JwtHelper, private router: Router) { }
  CanActivate() { 
     this.token = localStorage.getItem('jwt');
 
    if (this.token && !this.jwtHelper.isTokenExpired(this.token)){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
