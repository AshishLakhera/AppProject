import { Component, OnInit, Injectable } from '@angular/core';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { employeeModel } from '../../Model/employeeModel/employee.model';


 @Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
@Injectable()
export class EmployeeComponent implements OnInit {
  EmpModel:  employeeModel = new employeeModel('121', '4154', '45546', '654556', new Date(Date.now()), 4545454);
  constructor( private employeeServices1: employeeServices ) { }

  ngOnInit() {
  }
  onSubmit() {


this.employeeServices1.SaveEmployee(this.EmpModel);
  }
}
