import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';



@Component({

  selector: 'app-forms',

  templateUrl: './forms.component.html',

  styleUrls: ['./forms.component.css']

})

export class FormsComponent implements OnInit {

 user={
   name:"",
   age:0
}
  save(){
    const observable=this.userService.createUser(this.user);
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