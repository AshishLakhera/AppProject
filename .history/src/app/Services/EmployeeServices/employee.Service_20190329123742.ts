import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { employeeModel } from '../../Model/employeeModel/employee.model';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Response } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};
// const  params = new  HttpParams().set('name', 'teqqqqst');
const  params = new  HttpParams({fromString: 'name=era'});
@Injectable()

export class employeeServices implements OnInit {
startedEditing = new Subject<number>();
model: employeeModel[];
  constructor(private http: Http, private httpClient: HttpClient) {}
  GetEmployee() {
   return this.http.get('https://localhost:44371/api/values');
  }
  ngOnInit() {
    this.GetEmployee()
    .subscribe(
(response: Response) => {
  const data = response.json();
   this.model = data;
},
(error) => console.log(error)
    );
  }
  }
  GetEmployeeByIndex(index: number) {
    return this.model[index];
  }
   SaveEmployee(Employee) {
     console.log(Employee.Name);
     // tslint:disable-next-line:max-line-length
     return this.httpClient.post<employeeModel>('https://localhost:44371/api/Values/api/values/saveEmployee1',
      Employee )
     .subscribe(
       data => {
         console.log('Success', data);
       }
     );
   }
}