import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostUser } from './models/create-user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getUsers(){
    return this.http.get('https://reqres.in/api/users')
  }

  createUser(user: PostUser){
  return  this.http.post('https://reqres.in/api/users', user)
  }
  constructor(private http: HttpClient) { }
}
