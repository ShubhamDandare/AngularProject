import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      if(Response.role=='ROLE_READER'){
        this.router.navigate(['searchbooks'])
      }
      else if(Response.role=='ROLE_AUTHOR'){
        this.router.navigate(['savebook'])
      }
      console.log(Response);
      sessionStorage.setItem('credential',JSON.stringify(Response));
      // this.router.navigate(['savebook'])
    },
    function(error){
      alert("Something went wrong Please try again")
    },()=>{
      this.router.navigate(['searchbooks'])

    }
    )
 }
 constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

}
