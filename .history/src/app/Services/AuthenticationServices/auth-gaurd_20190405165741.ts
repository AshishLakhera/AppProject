import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthGaurd implements CanActivate {
token;
  constructor(private jwtHelper: JwtHelper, private router: Router) { }
  CanActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     this.token = localStorage.getItem('jwt');
    if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
