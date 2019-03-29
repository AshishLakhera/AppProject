import { Component, OnInit } from '@angular/core';
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
  constructor(private employeservice: employeeServices) { }

  ngOnInit() {
    this.subscription = this.employeservice.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.employeservice.GetEmployeeByIndex(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }
  onSubmit() {}
}
