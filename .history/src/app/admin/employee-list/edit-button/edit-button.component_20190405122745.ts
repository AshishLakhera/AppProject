import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Guid } from 'guid-typescript';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit, ICellRendererAngularComp {
  public params: any;
  selectedData;
  agInit(params: any): void {
      this.params = params;
  }
  constructor(private emplyeeService: employeeServices, private router: Router) { }

  ngOnInit() {
  }
  public refresh(params?: any): boolean {
    return true;
}
editbtn($event) {
  this.router.navigate(['editEmployee']);
  this.emplyeeService.empData = this.params.node.data;
}
deletebtn($event) {
  // console.log('delete click');
  // if (this.params.deletebtn instanceof Function) {
    // put anything into params u want pass into parents component
  //   const params = {
  //     event: $event,
  //     rowData: this.params.node.data
  //     // ...something
  //   };
  //   this.params.onClick(params);
  // }
  console.log(this.params.node.data.id);
this.emplyeeService.deleteEmp(this.params.node.data.id);
}
  public invokeDeleteMethod() {
     this.selectedData = this.params.api.getSelectedRows();
    this.params.api.updateRowsData({remove: this.selectedData});
  alert('hi');

}
 public invokeEditMethod() {


      this.params.api.setFocusedCell(this.params.node.rowIndex, 'courtname');
      this.params.api.startEditingCell({
      rowIndex: this.params.node.rowIndex,
     colKey: 'courtname',
     }
  );
 }
}
