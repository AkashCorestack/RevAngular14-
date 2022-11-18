import { Component,OnInit } from '@angular/core';
import { Serv1Service } from './service/serv1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myprojct';
  constructor(private serv:Serv1Service) {}

  ngOnInit(): void {}
  clk(){
    this.serv.adddata();
    
  }
}
