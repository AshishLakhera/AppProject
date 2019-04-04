import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employeeModel } from 'src/app/Model/employeeModel/employee.model';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';

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
  constructor(private employeservice: employeeServices) { }

  ngOnInit() {
    this.subscription = this.employeservice.startedEditing
      .subscribe(
        (emp: employeeModel) => {
          this.editedItemIndex = index;
          this.Model = this.employeservice.GetEmp();
          console.log(this.Model);
        }
      );
  }
  onSubmit() {}
}
