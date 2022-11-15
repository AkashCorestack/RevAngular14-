import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SigninComponent,
    SignupComponent
  ]
})
export class LoginModule { }
