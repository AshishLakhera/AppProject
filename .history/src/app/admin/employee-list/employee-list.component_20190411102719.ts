import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';
import { employeeModel } from 'src/app/Model/employeeModel/employee.model';
import { Response } from '@angular/http';
import {Router} from '@angular/router';
import { Subject, Observable, Subscription } from 'rxjs';
import { Guid } from 'guid-typescript';
import { GridOptions } from 'ag-grid-community';
import { EditButtonComponent } from './edit-button/edit-button.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
 employee:  employeeModel[];
 public gridOptions: GridOptions;
 onDeleteBtnClick1;
  k = [];
  rowDataClicked1 = [];
  public startedEditing1 = new Subject<employeeModel>();
  empSubs: Subscription;
  columnDefs = [
    {headerName: ' Name', field: 'name', editable: true},
    {headerName: ' Code', field: 'employeeCode', editable: true},
    {headerName: ' Department', field: 'department', editable: true},
    {headerName: ' Salary', field: 'salary', editable: true},
    {headerName: 'Employee joiningDay', field: 'joiningDate'},
    {headerName: 'Id', field: 'id'},
    {headerName: 'Action', field: 'Action',
    cellRendererFramework: EditButtonComponent
  , cellRendererParams: {
    onClick: (params) => (this.onDeleteBtnClick1.bind(this)) ,
    label: 'Click',
  }},
];

  constructor(private employeeServices1: employeeServices, private router: Router) {
    this.getData();
    this.gridOptions = {
      animateRows: true,
      columnDefs: this.columnDefs,
      rowData: this.getData(),
      rowSelection: 'multiple',
      context: {
        componentParent: this
      }
  };
  //   this.gridOptions = <GridOptions>{
  //     rowData: this.getData() ,
  //     columnDefs: this.columnDefs,
  //     context: {
  //         componentParent: this
  //     }
  // };
  console.log(this.employee);
  }
  em = new Subscription;
  gridApi;


gData(): any {
 this.employeeServices1.GetEmployee()
    .subscribe(
(response: Response) => {
  const data = response.json();
   this.employee = data;
   this.k = this.employee;
},
(error) => console.log(error)
    );
    console.log(this.k);
    return this.k;
}

// onDeleteBtnClick1(e) {
    // console.log('Oncomp');
    // this.employee.splice(this.employee.indexOf(e));
    // this.rowDataClicked1 = e.employee;
  // }
  ngOnInit() {
  // this.empSubs = this.getData();
  // this.em = this.getData();
  this.getData();
  }
  getData(): any  {
    this.employeeServices1.GetEmployee()
    .subscribe(
(response: any) => {
   this.employee = response;
   return this.employee;
  //  this.k = this.employee;
},
(error) => console.log(error)
    );
  }
  editClick(employee: employeeModel) {
    console.log('emplist');
    this.employeeServices1.sendEmp(employee);
    this.router.navigate(['editEmployee']);
  }
  deleteClick(emp) {
    console.log('deleteemp');
    this.employee.splice(this.employee.indexOf(emp));
  }
  deleteemp(emp) {
    this.employeeServices1.deleteEmp(emp.id);
    this.employee.splice(this.employee.indexOf(emp));
    console.log(this.employee);
  }
  ngOnDestroy() {
this.empSubs.unsubscribe();
  }
}
