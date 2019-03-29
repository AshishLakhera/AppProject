import { Component, OnInit } from '@angular/core';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { employeeModel } from '../../Model/employeeModel/employee.model';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';
 @Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  EmpModel:  employeeModel[] = [
  ];
  constructor( private employeeServices1: employeeServices ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.EmpModel);
    employeeServices1.SaveEmployee(this.EmpModel);
  }
}
