import { Component, OnInit } from '@angular/core';
import { employeeService } from 'src/app/Services/EmployeeServices/employee.Service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeServices: employeeService) {

   }

  ngOnInit() {
    console.log('Helo');
    this.employeeServices.GetEmployee();
  }

}
