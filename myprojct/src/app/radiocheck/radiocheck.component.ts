import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiocheck',
  templateUrl: './radiocheck.component.html',
  styleUrls: ['./radiocheck.component.css'],
})
export class RadiocheckComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onChange(e:any){
    alert(e.target.value);
  }
}
