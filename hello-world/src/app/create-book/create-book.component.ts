import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book={
    title:"",
    category:"",
    image:"",
    price:"",
    publisher:"",
    active:"",
    content:""
 }
 SaveBook(){
  const observable=this.bookService.SaveBook(this.book);
  observable.subscribe(
    (Response:any)=>{
      console.log(Response);
    },
    function(error){
      alert("Something went wrong Please try again")
    }
    )

 }
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
