import { Component, OnInit } from '@angular/core';
import { employeeModel } from 'src/app/Model/employeeModel/employee.model';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  EmpModel: employeeModel;
  constructor() { }

  ngOnInit() {
  }

}
