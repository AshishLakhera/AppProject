import { NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './Admin/employee-list/employee-list.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
import { EmployeeEditComponent } from './Admin/employee-edit/employee-edit.component';
import { ImportExcelComponent } from './Admin/import-excel/import-excel.component';
import { DialogComponent } from './Admin/upload-file/Dialog/dialog/dialog.component';
import { UploadFileComponent } from './Admin/upload-file/upload-file.component';
import { AuthGaurd } from './Services/AuthenticationServices/auth-gaurd';
import { LoginComponent } from './Admin/login/login/login.component';
 const appRoutes: Routes = [
   {path : 'Login', component: LoginComponent} 
   {path: '', redirectTo: '/employeeList', pathMatch: 'full', canActivate: [AuthGaurd] },
    {path : 'employeeList', component: EmployeeListComponent, canActivate: [AuthGaurd]},
    {path : 'addEmployee', component: EmployeeComponent , canActivate: [AuthGaurd]},
    {path : 'editEmployee', component: EmployeeEditComponent, canActivate: [AuthGaurd]},
    {path : 'importExcel', component: ImportExcelComponent, canActivate: [AuthGaurd]},
    {path : 'uploadFile', component: UploadFileComponent, canActivate: [AuthGaurd]},
    

 ];

@NgModule({
imports: [ RouterModule.forRoot(appRoutes)],
exports: [ RouterModule],
})
export class aapRoutingModule {

 }