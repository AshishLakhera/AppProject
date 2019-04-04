import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/Services/ExcelService/excel.service';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent implements OnInit {


  name = 'Angular 6';
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  },
  {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  },
  {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];
  constructor(private excelService: ExcelService) { }

  ngOnInit() {
  }
  exportAsXLSX(): void {
    this.excelService.ExportAsExcelFile(this.data, 'sample');
  }
}
