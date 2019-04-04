import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';
import { employeeModel } from 'src/app/Model/employeeModel/employee.model';
import { Response } from '@angular/http';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: employeeModel[];
  public startedEditing1 = new Subject<employeeModel>();
  @Output() clicked = new EventEmitter<string>();
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
  editClick(employee) {
    console.log('emplist');
    this.clicked = new EventEmitter<employee>();
    this.employeeServices1.sendEmp(employee);
    this.router.navigate(['editEmployee']);
  }

}
