import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatProgressBarModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileComponent } from '../Admin/upload-file/upload-file.component';
import { DialogComponent } from '../Admin/upload-file/Dialog/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  declarations: [UploadFileComponent, DialogComponent],
  entryComponents: [DialogComponent],
  exports: [UploadFileComponent],
  providers: [UploadService],
})
class UploadModule {}