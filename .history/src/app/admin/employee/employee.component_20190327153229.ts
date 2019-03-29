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
  EmpModel:  employeeModel = new employeeModel('121', '4154', '45546', '654556', '54656' , 'sadas' );
  constructor( private employeeServices1: employeeServices ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.EmpModel);
    console.log('creas');
this.employeeServices1.SaveEmployee(this.EmpModel);
  }
}
