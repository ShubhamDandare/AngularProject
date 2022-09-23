import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user={
    username:"",
    password:""
 }
 SignIn(){
  const observable=this.userService.SignIn(this.user);
  observable.subscribe(
    (Response:any)=>{
      console.log(Response);
    },
    function(error){
      alert("Something went wrong Please try again")
    }
    )
 }
 constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
