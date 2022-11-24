import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Childcomp1Component } from './childcomp1/childcomp1.component';
import { Childcomp2Component } from './childcomp2/childcomp2.component';
import { LoginModule } from './login/login.module';
import { CompanyComponent } from './company/company.component';
import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { TestmModule } from './testm/testm.module';
import { Login2Component } from './login2/login2.component';
import { FiltersComponent } from './filters/filters.component';
import { Mypipe1Pipe } from './pipes/mypipe1.pipe';
import { FiltertestComponent } from './filtertest/filtertest.component';
import { RadiocheckComponent } from './radiocheck/radiocheck.component';
import { GojsTestComponent } from './gojs-test/gojs-test.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Childcomp1Component,
    Childcomp2Component,
    CompanyComponent,
    PopupComponent,
    SignupComponent,
    Login2Component,
    FiltersComponent,
    Mypipe1Pipe,
    FiltertestComponent,
    RadiocheckComponent,
    GojsTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TestmModule,
  ],
  providers: [


    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {


}
