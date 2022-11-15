import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tst1Component } from './tst1/tst1.component';
import { Tst2Component } from './tst2/tst2.component';



@NgModule({
  declarations: [
    Tst1Component,
    Tst2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Tst1Component,
    Tst2Component,
    
  ]
})
export class TestmModule { }
