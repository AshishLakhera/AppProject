import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { employeeModel } from '../model/employeeModel/employee.model.';
import 'rxjs/Rx';

@Injectable()
export class employeeServices {
  constructor(private http: Http, private httpClient: HttpClient) {}
  GetEmployee() {
   return this.http.get('https://localhost:44371/api/values');
  }

   SaveEmployee(model: employeeModel) {
     const req = new HttpClient('Post', 'https://localhost:44371/api/Values/api/values/saveEmployee', 
     this.model, {reportProgress: true} );
     return this.httpClient.request(req);
   }
}