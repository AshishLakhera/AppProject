import { NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './Admin/employee-list/employee-list.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
import { EmployeeEditComponent } from './Admin/employee-edit/employee-edit.component';
import { ImportExcelComponent } from './Admin/import-excel/import-excel.component';
import { DialogComponent } from './Admin/upload-file/Dialog/dialog/dialog.component';
 const appRoutes: Routes = [
    {path: '', redirectTo: '/employeeList', pathMatch: 'full'},
    {path : 'employeeList', component: EmployeeListComponent},
    {path : 'addEmployee', component: EmployeeComponent},
    {path : 'editEmployee', component: EmployeeEditComponent},
    {path : 'importExcel', component: ImportExcelComponent},
    {path : 'dialog', component: DialogComponent},

 ];

@NgModule({
imports: [ RouterModule.forRoot(appRoutes)],
exports: [ RouterModule],
})
export class aapRoutingModule {

 }