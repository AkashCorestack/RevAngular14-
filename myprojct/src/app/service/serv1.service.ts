import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Serv1Service {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/Dummy';
  url2 = 'https://fakestoreapi.com/products';
  data = { id: '', name: 'akash', pw: '' };

  adddata() {
    this.http.post(this.url, this.data).subscribe((dta) => {
      alert('Added successFully');
    });
  }
  showdata(){
    this.http.get(this.url2,)
  }
}
