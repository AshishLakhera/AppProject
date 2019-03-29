import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { employeeModel } from '../../Model/employeeModel/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  EmpModel:  employeeModel[] = [
    new employeeModel('Text', '123', 'jk', '5500' , '12-02-2109', '123')
  ];
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.EmpModel.name);
  }
}
