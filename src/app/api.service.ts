import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
