import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    },()=>{
      this.router.navigate(['signin'])

    }
    )
 }
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

}
