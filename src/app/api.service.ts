import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getUrl = 'https://reqres.in/api/unknown';

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.getUrl)
  }

  
}
