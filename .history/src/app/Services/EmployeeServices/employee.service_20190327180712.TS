import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { employeeModel } from '../../Model/employeeModel/employee.model';
import 'rxjs/Rx';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};
const  params = new  HttpParams().set('name', 'test');
@Injectable()

export class employeeServices {
model: employeeModel[];
  constructor(private http: Http, private httpClient: HttpClient) {}
  GetEmployee() {
   return this.http.get('https://localhost:44371/api/values');
  }

   SaveEmployee(model: employeeModel) {
    console.log(model);
     // tslint:disable-next-line:max-line-length
     return this.httpClient.post<employeeModel>('https://localhost:44371/api/Values/api/values/saveEmployee', params , httpOptions )
     .subscribe(
       data => {
         console.log('Success', data);
       }
     );
   }
}