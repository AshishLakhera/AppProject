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
import { ImportExcelComponent } from './Admin/import-excel/import-excel.component';
import { UploadFileComponent } from './Admin/upload-file/upload-file.component';
import { DialogComponent } from './Admin/upload-file/Dialog/dialog/dialog.component';
import { UploadModule } from './upload-file/upload-file.module';
import {
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatProgressBarModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    ImportExcelComponent,
    UploadFileComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    aapRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    UploadModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [employeeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
