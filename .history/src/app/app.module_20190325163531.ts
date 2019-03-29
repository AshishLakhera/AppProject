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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    aapRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
