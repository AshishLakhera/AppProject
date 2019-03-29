import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class employeeServices {
  constructor(private http: Http) {}
  GetEmployee() {
   return this.http.get('https://localhost:44371/api/values'); }
   SaveEmployee() {
     const req = new httpre
   }
}