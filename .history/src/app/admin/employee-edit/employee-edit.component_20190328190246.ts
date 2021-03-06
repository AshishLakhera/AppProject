import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employeeModel } from 'src/app/Model/employeeModel/employee.model';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';

import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  Model: employeeModel;
  subscription: Subscription;
  editedItemIndex: number;
  @ViewChild('f') empForm: NgForm;
  constructor(private employeservice: employeeServices) { }

  ngOnInit() {
    this.subscription = this.employeservice.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.Model = this.employeservice.GetEmployeeByIndex(index);
          this.empForm.setValue({
            name: this.Model.name,
            amount: this.Model.amount
          })
        }
      );
  }
  onSubmit() {}
}
