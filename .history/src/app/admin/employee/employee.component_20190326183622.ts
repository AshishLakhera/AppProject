import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { employeeModel } from '../../Model/employeeModel/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    const newEmployee = new employeeModel(
      this.employeeForm.value['name'],
      this.employeeForm.value['employeeCode'],
      this.employeeForm.value['department'],
      this.employeeForm.value['salary']
      this.employeeForm.value['joiningDate']);
  }
}
