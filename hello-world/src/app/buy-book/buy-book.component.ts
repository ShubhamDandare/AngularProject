import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-buy-book',
  templateUrl: './buy-book.component.html',
  styleUrls: ['./buy-book.component.css']
})
export class BuyBookComponent implements OnInit {
  ispaybook:boolean=false;
  showbuybookUi:any
  book={
    username:"",
    email:"",
   bookid:"",
   
 }
 BuyBook(){
  const observable=this.bookService.BuyBook(this.book);
  observable.subscribe(
    (Response:any)=>{
      console.log(Response);
      sessionStorage.setItem('credential',JSON.stringify(Response));
      this.ispaybook=true
      this.showbuybookUi=Response;
    }
 , function(error){
  alert("Something went wrong Please try again")
}
)
}



  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
  }

}
