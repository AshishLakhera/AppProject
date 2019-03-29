import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
      this.recipeForm.value['name'],
      this.recipeForm.value['employeeCode'],
      this.recipeForm.value['department'],
      this.recipeForm.value['salary']
      this.recipeForm.value['joiningDate']);
    // if (this.editMode) {
    //   this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    // } else {
    //   this.recipeService.addRecipe(this.recipeForm.value);
    // }
    // this.onCancel();
  }
}
