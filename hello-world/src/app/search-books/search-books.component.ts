import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  uiResponse : any;
  showTable : boolean = false ;
 book={
    category:"",
    author:"",
   price:"",
   
 }
 SearchBook(){
  const observable=this.bookService.SearchBook(this.book);
  observable.subscribe(
    (Response:any)=>{
      console.log(Response);
      this.uiResponse = Response;
      this.showTable = true;
      // sessionStorage.setItem('credential',JSON.stringify(Response));
    //  ] if(Response=='successfull'){}
      // this.router.navigate(['searchresult']);
    
    },
    function(error){
      alert("Something went wrong Please try again")
    }
    )

 }
  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    
  }

}
