import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
//   SAVE_BASE_URL="http://13.114.51.95:8181/degitalbook/save"
//   SEARCH_URL="http://13.114.51.95:8181/degitalbook/searchbook"
//  BUY_BOOK_URL="http://13.114.51.95:8181/degitalbook/buybook"
  SAVE_BASE_URL="http://localhost:8181/degitalbook/save"
  SEARCH_URL="http://localhost:8181/degitalbook/searchbook"
  BUY_BOOK_URL="http://localhost:8181/degitalbook/buybook"

  SearchBook(book:{
    category:string,
    author:string,
    price:string,
      })
     {
      //  const credentials=sessionStorage.getItem('credential');
      //  const token:any=JSON.parse(credentials||'{}')['accessToken'];
          //  return this.http.get(this.SEARCH_URL,book)
          //   {
          //    headers:{
          //      Authorization:'Bearer '+token
          //    }
          //  });
          let params=new HttpParams();
          params=params.append("category",book.category),
          params=params.append("author",book.author),
          params=params.append("price",book.price)
          return this.http.get(this.SEARCH_URL,{params})


     }

    SaveBook(book:
      {title:String,category:String,image:String,author:String,
      price:String,publisher:String,active:String,content:String}
      )
      {const credentials=sessionStorage.getItem('credential');
      const token:any=JSON.parse(credentials||'{}')['accessToken'];
      return this.http.post(this.SAVE_BASE_URL,book,{
        headers:{
          Authorization:'Bearer '+token
        }
      });
    }

    BuyBook(book:{
     username:String,
    email:String,
    bookid:String}){ 
  const credentials=sessionStorage.getItem('credential');
  const token:any=JSON.parse(credentials||'{}')['accessToken'];
      return this.http.post(this.BUY_BOOK_URL,book,{
        headers:{
          Authorization:'Bearer '+token
        }
    });
  }


  constructor(private http: HttpClient) { }
}
