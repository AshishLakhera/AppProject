import { Component, OnInit } from '@angular/core';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';
import { employeeModel } from 'src/app/Model/employeeModel/employee.model';
import { Response } from '@angular/http';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: employeeModel[];
  constructor(private employeeServices1: employeeServices) {

   }

  ngOnInit() {
    console.log('Helo');
    this.employeeServices1.GetEmployee()
    .subscribe(
(response: Response) => {
  const data = response.json();
   this.employee = data;
  console.log(data);
},
(error) => console.log(error)
    );
    console.log('Helo2');
  }

}
