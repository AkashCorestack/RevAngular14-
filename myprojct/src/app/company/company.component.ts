import { Component, OnInit } from '@angular/core';
import { companymodel } from '../model/companymodel';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  constructor(private dialog:MatDialog) {}
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
  ngOnInit(): void {}

  openPopup(){

  }
}
