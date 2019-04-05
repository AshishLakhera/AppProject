import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Guid } from 'guid-typescript';
import { employeeServices } from 'src/app/Services/EmployeeServices/employee.Service';

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
  constructor(private emplyeeService: employeeServices) { }

  ngOnInit() {
  }
  public refresh() {
    return true;
}
deletebtn(id: Guid) {
this.emplyeeService.deleteEmp(id);
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
