import { Component, OnInit } from '@angular/core';
import { employeeservice } from 'src/app/Services/EmployeeServices/employee.Service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeServices: employeeservice) { }

  ngOnInit() {
  }
onFetchData() {
this.employeeServices.GetEmployee();

}
}
