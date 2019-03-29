
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import {EmployeeModel} from './EmployeeModel';

@Injectable()
export class employeeservice {

constructor(private httpClient: HttpClient) {

}


GetEmployee() {
this.httpClient.get<EmployeeModel[]>('https://localhost:44371/api/values', {
    observe: 'body',
    reponseType: 'json'
})
.map(
    (employee) => {
        console.log(employee);
    }
);

}
}
