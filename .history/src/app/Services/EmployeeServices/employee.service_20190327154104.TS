import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { employeeModel } from '../../Model/employeeModel/employee.model';
import 'rxjs/Rx';

@Injectable()
export class employeeServices {
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
    // tslint:disable-next-line:semicolon
  }
model: employeeModel[];
  constructor(private http: Http, private httpClient: HttpClient) {}
  GetEmployee() {
   return this.http.get('https://localhost:44371/api/values');
  }

   SaveEmployee(model) {

      this.httpClient.post('https://localhost:44371/api/Values/api/values/saveEmployee', this.model )
     .subscribe(
       data => {
         console.log('Success', data);
       }
     );
   }
}