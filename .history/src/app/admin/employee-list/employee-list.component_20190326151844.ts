import { Component, OnInit } from '@angular/core';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeServices1: employeeServices) {

   }

  ngOnInit() {
    console.log('Helo');
    this.employeeServices1.GetEmployee()
    .subscribe(
(response) => console.log(response),
(error) => console.log(error)
    );
    console.log('Helo2');
  }

}
