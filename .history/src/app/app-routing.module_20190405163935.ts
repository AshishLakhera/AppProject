import { NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './Admin/employee-list/employee-list.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
import { EmployeeEditComponent } from './Admin/employee-edit/employee-edit.component';
import { ImportExcelComponent } from './Admin/import-excel/import-excel.component';
import { DialogComponent } from './Admin/upload-file/Dialog/dialog/dialog.component';
import { UploadFileComponent } from './Admin/upload-file/upload-file.component';
 const appRoutes: Routes = [
    {path: '', redirectTo: '/employeeList', pathMatch: 'full', canActivate: [AuthGuard] },
    {path : 'employeeList', component: EmployeeListComponent},
    {path : 'addEmployee', component: EmployeeComponent},
    {path : 'editEmployee', component: EmployeeEditComponent},
    {path : 'importExcel', component: ImportExcelComponent},
    {path : 'uploadFile', component: UploadFileComponent},

 ];

@NgModule({
imports: [ RouterModule.forRoot(appRoutes)],
exports: [ RouterModule],
})
export class aapRoutingModule {

 }