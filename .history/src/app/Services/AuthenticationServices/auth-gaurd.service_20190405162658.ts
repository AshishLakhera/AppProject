import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private jwtHelper: JwtHelper) { }
}
