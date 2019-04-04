import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { employeeModel } from '../../Model/employeeModel/employee.model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};
// const  params = new  HttpParams().set('name', 'teqqqqst');
// const  params = new  HttpParams({fromString: 'name=era'});
@Injectable()
export class employeeServices {
model: employeeModel[];
SingleModel: employeeModel;
startedEditing = new Subject<employeeModel>();
constructor(private http: Http, private httpClient: HttpClient) {}
GetEmployee() {
   return this.http.get('https://localhost:44371/api/values');
  }
GeEmpByIndex() {
    return this.model;
  }
  // sendEmp() {}
  GetEmp(): Observable<employeeModel> {
    return this.startedEditing.asObservable();
  }
sendEmp(emp) {
  this.startedEditing.next(emp);
}
SaveEmployee(employee) {
     console.log(employee.Name);
     // tslint:disable-next-line:max-line-length
     return this.httpClient.post<employeeModel>('https://localhost:44371/api/Values/api/values/saveEmployee1',
      {employee} )
     .subscribe(
       data => {
         console.log('Success', data);
       }
     );
   }
}