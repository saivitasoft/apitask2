import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
apiData:any
  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getData().subscribe((res: any) => {
      this.apiData = res.data
      console.log(this.apiData, 'b');
    });
  


}
}

