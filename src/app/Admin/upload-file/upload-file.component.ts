import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { UploadService } from 'src/app/Services/uploadFileService/uploadfile.service';
import { DialogComponent } from './Dialog/dialog/dialog.component';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(public dialog: MatDialog, public uploadService: UploadService) { }
  public openUploadDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      height: '50%',
    });
  }
  ngOnInit() {
  }

}
