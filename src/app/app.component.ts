import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app14';
employee:any;
  constructor(public service:DataService)
  {
    let d=this.service.getdata();
d.subscribe((result:any)=>{
  this.employee=result;
});
  }
}
