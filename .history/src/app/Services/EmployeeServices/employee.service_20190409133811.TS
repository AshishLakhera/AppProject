import { Injectable, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { employeeModel } from '../../Model/employeeModel/employee.model';
import { Observable, observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';



// const  params = new  HttpParams().set('name', 'teqqqqst');
// const  params = new  HttpParams({fromString: 'name=era'});
@Injectable()
export class employeeServices {
 httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
  };
  model: employeeModel[];
SingleModel: employeeModel;
startedEditing = new Subject<any>();
@Output() empData: EventEmitter<any> = new EventEmitter();
constructor(private http: Http, private httpClient: HttpClient, private router: Router) {}
GetEmployee() {
   return this.http.get('https://localhost:44371/api/values', this.httpOptions);
  }
GeEmpByIndex() {
    return this.model;
  }
  // sendEmp() {}
  // GetEmp(): Observable<employeeModel> {
  //   return this.startedEditing.asObservable();
  // }
  GetEmp() {
    return this.startedEditing.asObservable();
  }
// sendEmp(emp: employeeModel) {
//   this.startedEditing.next(emp);
// }
sendEmp(emp) {
  this.SingleModel = emp;
    this.empData.emit(emp);
  }
  deleteEmp(id) {
    return this.httpClient.post('https://localhost:44371/api/Values/DeleteEmployee?id=' + id,
    id)
    .subscribe(
      data => {
        this.router.navigate(['employeeList']);
      }
    );
  }
SaveEmployee(employee) {
     console.log(employee.name);
     // tslint:disable-next-line:max-line-length
     return this.httpClient.post<employeeModel>('https://localhost:44371/api/Values/api/values/saveEmployee1',
      employee )
     .subscribe(
       data => {
         console.log('Success', data);
         this.router.navigate(['employeeList']);
       }
     );
   }
   EditEmployee1(employee) {
     return this.httpClient.post<employeeModel>('https://localhost:44371/api/Values/editEmployee',
     employee)
     .subscribe(
       data => {
         console.log('Sucess', data);
         this.router.navigate(['employeeList']);
       }
     );
   }
}