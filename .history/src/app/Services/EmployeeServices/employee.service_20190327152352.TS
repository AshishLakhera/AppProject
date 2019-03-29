import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { employeeModel } from '../../Model/employeeModel/employee.model';
import 'rxjs/Rx';

@Injectable()
export class employeeServices {
  constructor(private http: Http, private httpClient: HttpClient) {}
  GetEmployee() {
   return this.http.get('https://localhost:44371/api/values');
  }

   SaveEmployee(model: employeeModel) {
     console.log('Inservice');
     return this.http.Post('https://localhost:44371/api/Values/api/values/saveEmployee', this.model )
     .subscribe(
       data => {
         console.log('Success', data);
       }
     );
   }
}