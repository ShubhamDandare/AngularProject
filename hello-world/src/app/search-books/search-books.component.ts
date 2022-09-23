import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
 book={
    title:"",
    author:"",
    publisher:"",
    releasedate:""
 }
 SearchBook(){
  const observable=this.bookService.SearchBook(this.book);
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
