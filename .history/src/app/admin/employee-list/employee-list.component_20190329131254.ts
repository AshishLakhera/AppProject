import { Component, OnInit } from '@angular/core';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';
import { employeeModel } from 'src/app/Model/employeeModel/employee.model';
import { Response } from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: employeeModel[];
  constructor(private employeeServices1: employeeServices, private router: Router) {

   }

  ngOnInit() {
    this.employeeServices1.GetEmployee()
    .subscribe(
(response: Response) => {
  const data = response.json();
   this.employee = data;
},
(error) => console.log(error)
    );
  }
  editClick(id: number) {
    this.employeeServices1.startedEditing.next(id);
    console.log(id);
    this.router.navigate(['editEmployee']);

console.log(id);
  }

}
