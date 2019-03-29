import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { employeeModel } from '../../Model/employeeModel/employee.model';
@Injectable()
export class employeeServices {
  constructor(private httpClient: HttpClient) {}
  GetEmployee() {console.log('Helo4');
    this.httpClient
      .get<employeeModel[]>('https://localhost:44371/api/values', {
        observe: 'body',
        responseType: 'json'
      })
      .map(employees => {
        console.log(employees);
      });
  }
}
