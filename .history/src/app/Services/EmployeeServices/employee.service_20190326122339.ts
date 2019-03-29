
import { Injectable } from '@angular/core';
import {
     HttpClient,
    HttpHeaders,
     HttpParams,
     HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import {employeeModel} from './model/employeeModel/employee.model';

@Injectable()
export class employeeservice {
constructor(private httpClient: HttpClient) {

}

GetEmployee() {
this.httpClient.get<employeeModel[]>('https://localhost:44371/api/values', {
    
})
.map(
    (employee) => {
        console.log(employee);
    }
);


}
}
