import { Injectable } from '@angular/core';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGaurd implements CanActivate {
token;
  constructor(private jwtHelper: JwtHelperService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     this.token = localStorage.getItem('jwt');
    if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
      return true;
    }
    this.router.navigate(['Login']);
    return false;
  }
}
