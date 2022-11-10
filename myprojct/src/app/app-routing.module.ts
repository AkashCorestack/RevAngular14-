import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Childcomp1Component } from './childcomp1/childcomp1.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  {
    path: 'main',
    component: Comp1Component,
    title: 'First',

    children: [
      {
        path: 'childa',
        component: Childcomp1Component,
      },
    ],
  },
  {
    path: 'com2',
    component: Comp2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
