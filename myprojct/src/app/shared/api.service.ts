import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { companymodel,userModel } from '../model/companymodel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiurl = 'http://localhost:3000/Company';
  url2 = 'https://dummyjson.com/products';
  getUsers(){
    return this.http.get(this.url2+'/'+1);

  }

  getallcompany(): Observable<companymodel[]> {
    return this.http.get<companymodel[]>(this.apiurl);
  }

  getcompanybyid(id: any): Observable<companymodel> {
    return this.http.get<companymodel>(this.apiurl + '/' + id);
  }

  removecompanybyid(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

  Updatecompany(id: any, companydata: any) {
    return this.http.put(this.apiurl + '/' + id, companydata);
  }

  createcompany(companydata: any) {
    console.log(companydata);

    return this.http.post(this.apiurl, companydata);
  }
}
