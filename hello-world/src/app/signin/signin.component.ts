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
      console.log(Response);
      sessionStorage.setItem('credential',JSON.stringify(Response));
      this.router.navigate([''])
    },
    function(error){
      alert("Something went wrong Please try again")
    }
    )
 }
 constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

}
