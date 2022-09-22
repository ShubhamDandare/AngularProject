
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL="http://localhost:5100/user"
 createUser(user:{name:String,age:number}) {
return this.http.post(this.BASE_URL,user)
 }

  constructor(private http: HttpClient) { }
}

