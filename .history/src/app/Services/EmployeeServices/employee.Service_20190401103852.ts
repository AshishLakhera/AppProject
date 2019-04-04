import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { employeeModel } from '../../Model/employeeModel/employee.model';
import { Observable, observable } from 'rxjs';
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
 ob$ = new Observable();
 observer = {
  next: data => console.log( 'Data received: ', data),
  complete: data => console.log('Completed'),
};
constructor(private http: Http, private httpClient: HttpClient) {}
GetEmployee() {
   return this.http.get('https://localhost:44371/api/values');
  }
GeEmpByIndex() {
    return this.model;
  }
  // sendEmp() {}
  GetEmp(): Observable<employeeModel> {
     this.startedEditing.asObservable();
    return this.ob$.subscribe(this.observer);
  }
sendEmp(emp) {
  this.startedEditing.next(emp);
  this.ob$ = Observable.create((observer) => {
    observer.next(emp);
});
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