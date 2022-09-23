import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  BASE_URL="http://localhost:8181/degitalbook/"

  SearchBook(book:{title:String,author:String,publisher:String,releasedate:String}) {
    return this.http.post(this.BASE_URL+"searchbook",book);
     }

    SaveBook(book:{title:String,category:String,image:String,
      price:String,publisher:String,active:String,content:String}){
      return this.http.post(this.BASE_URL+"save",book);
    }


  constructor(private http: HttpClient) { }
}
