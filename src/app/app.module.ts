import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Admin/header/header.component';
import { FooterComponent } from './Admin/footer/footer.component';
import { SidebarComponent } from './Admin/sidebar/sidebar.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
import { EmployeeListComponent } from './Admin/employee-list/employee-list.component';
import {aapRoutingModule} from './app-routing.module';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { employeeServices } from './Services/EmployeeServices/employee.Service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './Admin/employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    aapRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [employeeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
