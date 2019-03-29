import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class employeeServices {
  constructor(private http: Http) {}
  GetEmployee() {
   return this.http
      .get('https://localhost:44371/api/values');
  }
}
