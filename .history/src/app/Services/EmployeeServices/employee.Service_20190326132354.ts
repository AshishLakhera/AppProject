
import { Injectable } from '@angular/core';
import {HttpClientModule ,
     HttpClient,
    HttpHeaders,
     HttpParams,
     HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import { EmployeeModel } from '../../Model/employeeModel/employee.model';

@Injectable()
export class employeeservice {
constructor(private httpClient: HttpClient) {
}

GetEmployee() {
    console.log('cometo');
this.httpClient.get<EmployeeModel[]>('https://localhost:44371/api/values', {
  
    responseType : 'json'
})
.map(
    (employees) => {
        console.log(employees);
    }
);


} 
}
