import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';
import { employeeModel } from 'src/app/Model/employeeModel/employee.model';
import { Response } from '@angular/http';
import {Router} from '@angular/router';
import { Subject, Observable, Subscription } from 'rxjs';
import { Guid } from 'guid-typescript';
import { GridOptions } from 'ag-grid-community';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employee: employeeModel[];
  private gridOptions: GridOptions;
  public startedEditing1 = new Subject<employeeModel>();
  empSubs: Subscription;
  columnDefs = [
    {headerName: ' Name', field: ' Name'},
    {headerName: ' Code', field: ' Code'},
    {headerName: ' Department', field: ' Department'},
    {headerName: ' Salary', field: 'Employee Salary'},
    {headerName: 'Employee joiningDay', field: 'Employee joiningDay'},
    {headerName: 'Id', field: 'Id'},
    {headerName: 'Action', field: 'Action'},
];
  constructor(private employeeServices1: employeeServices, private router: Router) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {headerName: 'Employee Name', field: ' EmployeeName'},
    {headerName: 'Employee Code', field: ' EmployeeCode'},
    {headerName: 'Employee Department', field: ' EmployeeDepartment'},
    {headerName: 'Employee Salary', field: ' EmployeeSalary'},
    {headerName: 'Employee joiningDay', field: ' EmployeejoiningDay'},
    {headerName: 'Id', field: 'Id'},
    {headerName: 'Action', field: 'Action'},

  ];
  this.getData();
 for (const emp of this.employee)
 {
console.log(emp.name);

 }
  this.gridOptions.rowData = this.employee;
  } em = new Subscription;

  ngOnInit() {
  this.empSubs = this.getData();
  this.em = this.getData();
  }
  getData() {
  return  this.employeeServices1.GetEmployee()
    .subscribe(
(response: Response) => {
  const data = response.json();
   this.employee = data;
},
(error) => console.log(error)
    );
  }
  editClick(employee: employeeModel) {
    console.log('emplist');
    this.employeeServices1.sendEmp(employee);
    this.router.navigate(['editEmployee']);
  }
  deleteemp(emp) {
    console.log(emp.id);
    this.employeeServices1.deleteEmp(emp.id);
    this.employee.splice(this.employee.indexOf(emp));
  }
  ngOnDestroy() {
this.empSubs.unsubscribe();
  }
}
