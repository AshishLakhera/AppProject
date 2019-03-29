import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { employeeModel } from '../../Model/employeeModel/employee.model';
import 'rxjs/Rx';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};
@Injectable () ;

export class employeeServices {

  constructor(private http: Http, private httpClient: HttpClient) {}
  GetEmployee() {
   return this.http.get('https://localhost:44371/api/values');
  }

   SaveEmployee(model: employeeModel) {

     return this.httpClient.post<employeeModel>('https://localhost:44371/api/Values/api/values/saveEmployee', this.model, httpOptions )
     .subscribe(
       data => {
         console.log('Success', data);
       }
     );
   }
}