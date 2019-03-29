import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { employeeModel } from '../../Model/employeeModel/employee.model';
import { employeeServices } from '../../services/EmployeeServices/employee.serice';
 @Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  EmpModel:  employeeModel[] = [
  ];
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.EmpModel);
    employeeServices.SaveEmployee(this.EmpModel);
  }
}
