
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import {EmployeeModel} from './EmployeeModel';

@Injectable()
export class employeeservice {
constructor(private httpClient: HttpClient) {

}

GetEmployee() {
this.httpClient.get<EmployeeModel[]>('')

}
