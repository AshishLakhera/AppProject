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
import { AgGridModule } from 'ag-grid-angular';
import {
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatProgressBarModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { UploadService } from './Services/uploadFileService/uploadfile.service';
import { EditButtonComponent } from './Admin/employee-list/edit-button/edit-button.component';
import { LoginComponent } from './Admin/login/login/login.component';
import { AuthGaurd } from './Services/AuthenticationServices/auth-gaurd';
import { JwtHelperService, JwtModule  } from '@auth0/angular-jwt';

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
    DialogComponent,
    UploadFileComponent,
    EditButtonComponent,
    LoginComponent
  ],
  imports: [
    JwtModule.forRoot({
    config: {
      tokenGetter: function  tokenGetter() {
           return     localStorage.getItem('access_token');},
      whitelistedDomains: ['localhost:44371'],
      blacklistedRoutes: ['https://localhost:44371/api/Auth/login']
    }
  }),
    BrowserModule,
    aapRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    AgGridModule.withComponents(null)
  ],
  providers: [employeeServices, UploadService, AuthGaurd, JwtHelperService],
  bootstrap: [AppComponent],
  exports: [UploadFileComponent],
  entryComponents: [DialogComponent, EditButtonComponent]
})
export class AppModule { }
