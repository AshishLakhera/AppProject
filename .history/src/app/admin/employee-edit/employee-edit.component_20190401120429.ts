import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employeeModel } from 'src/app/Model/employeeModel/employee.model';
import { Subject } from 'rxjs/Subject';
import { Subscription, Observable } from 'rxjs';

import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  Model:  employeeModel = new employeeModel();
  subscription: Subscription;
  editedItemIndex: number;
  emp: Observable<employeeModel>;
  constructor(private employeservice: employeeServices) { }

  ngOnInit() {
    console.log('Test');
     this.employeservice.empData
      .subscribe(x => {
          // this.emp = this.employeservice.GetEmp();
          console.log(x.name);
        }
      );
  }
  onSubmit() {}
}
