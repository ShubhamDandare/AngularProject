
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL="http://localhost:5100/user"
Sign_Up_URL="http://localhost:8181/user/auth/signup"
Sign_In_URL= "http://localhost:8181/user/auth/signin"

SignIn(user:{username:String,password:String}){
  return this.http.post(this.Sign_In_URL,user)}

SignUp(user:{username:String,password:String,email:String,role:String}){
  return this.http.post(this.Sign_Up_URL,user)
}

 createUser(user:{name:String,age:number}) {
return this.http.post(this.BASE_URL,user)
 }

  constructor(private http: HttpClient) { }
}

