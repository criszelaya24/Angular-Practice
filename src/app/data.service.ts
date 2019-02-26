import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getUsers(){
    return this.http.get('https://reqres.in/api/users')
  }
  constructor(private http: HttpClient) { }
}
