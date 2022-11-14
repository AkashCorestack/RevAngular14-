import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-childcomp1',
  templateUrl: './childcomp1.component.html',
  styleUrls: ['./childcomp1.component.css']
})
export class Childcomp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() dta =""


}
