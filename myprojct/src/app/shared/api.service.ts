import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { companymodel } from '../model/companymodel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiurl = 'http://localhost:3000/Company';

  getallcompany(): Observable<companymodel[]> {
    return this.http.get<companymodel[]>(this.apiurl);
  }

  getcompanybyid(id: any): Observable<companymodel> {
    return this.http.get<companymodel>(this.apiurl + '/' + id);
  }


  removecompanybyid(id: any){
    return this.http.delete(this.apiurl + '/' + id);
  }

  Updatecompany(id:any,companydata:any){
    return this.http.put(this.apiurl+'/'+id,companydata);
  }

  createcompany(companydata: any) {
    return this.http.post(this.apiurl, companydata);
  }
}
