import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
products:any
  constructor(private myapi:ApiService){
this.myapi.getData().subscribe((res:any)=>{
this.products = res;
console.log(this.products, 'check');

})
  }
}
