import { Component, OnInit , ViewChild} from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { forkJoin } from 'rxjs/observable/forkJoin';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @ViewChild('file') file;
  public files: Set<File> = new Set();
progress;
canBeClosed = true;
primaryButtonText = 'Upload';
showCancelButton = true;
uploading = false;
uploadSuccessful = false;
  constructor(public dialogRef: MatDialogRef<DialogComponent>, public uploadService: Upload) { }

  ngOnInit() {
  }
  addFiles() {
    this.file.nativeElement.click();
  }
  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }
}
