import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  
  editdata: any;

  constructor(
    private builder: FormBuilder,
    private serv: ApiService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data.id != '' && this.data.id != null) {
      this.serv.getcompanybyid(this.data.id).subscribe((dta) => {
         this.editdata = dta;
        console.log(dta);

        this.companyform.setValue({
          id: this.editdata.id,
          name: this.editdata.name,
          empcount: this.editdata.empcount,
          revenue: this.editdata.revenue,
          address: this.editdata.address,
          isactive: this.editdata.isactive,
        });
      });
    }
  }
  companyform = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    name: this.builder.control('', Validators.required),
    empcount: this.builder.control('', Validators.required),
    revenue: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    isactive: this.builder.control(true),
  });

  savecompany() {
    if (this.companyform.valid) {
      const edtid = this.companyform.getRawValue().id;

      if (edtid!='' && edtid!= null){
        // alert("if cndth ");
        this.serv.Updatecompany(edtid,this.companyform.getRawValue()).subscribe(arg=>{
          this.closepopup();
          alertify.success('Updated successfully.');
        });
      }

      else{
    
      this.serv.createcompany(this.companyform.value).subscribe((arg) => {
        this.closepopup();
          alertify.success('saved successfully.');

      });

    }


    }
  }

  closepopup() {
    this.dialog.closeAll();
  }
}
