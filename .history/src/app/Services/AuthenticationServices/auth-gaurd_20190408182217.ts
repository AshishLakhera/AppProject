import { Injectable } from '@angular/core';
import { JwtHelperService as _JwtHelperService  } from '@auth0/angular-jwt';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



export const JwtHelperService  = {
  provide: _JwtHelperService,
  useFactory: () => {
    return new _JwtHelperService();
  }
};
@Injectable()
export class AuthGaurd implements CanActivate {
token;
  constructor( private jwtHelper: _JwtHelperService,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     this.token = localStorage.getItem('jwt');
      if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
      // if (this.token) {
      return true;
    }
    this.router.navigate(['Login']);
    return false;
  }
}
