import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  SAVE_BASE_URL="http://localhost:8181/degitalbook/save"
  SEARCH_URL="http://localhost:8181/degitalbook/searchbook"

  SearchBook(book:{
    title:String,
    author:String,
    publisher:String,
    releasedate:String}) {
    return this.http.post(this.SEARCH_URL,book);
     }

    SaveBook(book:{title:String,category:String,image:String,
      price:String,publisher:String,active:String,content:String}){
      return this.http.post(this.SAVE_BASE_URL,book);
    }


  constructor(private http: HttpClient) { }
}
