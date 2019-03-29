import { NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './Admin/employee-list/employee-list.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/employeeList', pathMatch: 'full'},
    {path : 'employeeList', component: EmployeeListComponent}
 ];

@NgModule({
imports: [ RouterModule.forRoot(appRoutes)],
exports: [ RouterModule],
})
export class aap-routingmodule {

 }