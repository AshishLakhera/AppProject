import { NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './Admin/employee-list/employee-list.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
 const appRoutes: Routes = [
    {path: '', redirectTo: '/employeeList', pathMatch: 'full'},
    {path : 'employeeList', component: EmployeeListComponent},
    {path : 'addEmployee', component: EmployeeComponent}
 ];

@NgModule({
imports: [ RouterModule.forRoot(appRoutes)],
exports: [ RouterModule],
})
export class aapRoutingModule {

 }