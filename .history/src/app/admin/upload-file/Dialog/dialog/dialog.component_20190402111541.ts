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
  constructor() { }

  ngOnInit() {
  }
}
