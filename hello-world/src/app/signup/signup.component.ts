import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
 username:"",
 password:"",
 email:"",
  role:""
 }
 SignUp(){
  const observable=this.userService.SignUp(this.user);
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
