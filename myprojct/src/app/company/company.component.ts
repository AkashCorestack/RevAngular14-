import { Component, OnInit } from '@angular/core';
import { companymodel } from '../model/companymodel';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { identifierName } from '@angular/compiler';
import { ApiService } from '../shared/api.service';
import * as alertify from 'alertifyjs'
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  constructor(private dialog: MatDialog, private serv: ApiService) {}
  companydata!: companymodel[];
  displaycolumns: string[] = [
    'id',
    'name',
    'empcount',
    'revenue',
    'address',
    'isactive',
    'action',
  ];
  ngOnInit(): void {
    this.loadcompany();
  }

  openPopup(id: any) {
    const __popup = this.dialog.open(PopupComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id,
      },
    });
    __popup.afterClosed().subscribe((res) => {
      this.loadcompany();
    });
  }


  
  loadcompany() {
    this.serv.getallcompany().subscribe((dta) => {
      this.companydata = dta;
    });
  }



  editcompany(id: any) {
    this.openPopup(id);
  }



  delcompany(id:any){

alertify.confirm(
  'Remove Company',
  'do you want remove this company?',
  () => {
    this.serv.removecompanybyid(id).subscribe((r) => {
      this.loadcompany();
    });
  },
  function () {}
);
  }
}
