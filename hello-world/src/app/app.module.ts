import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsComponent } from './components/forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuyBookComponent } from './buy-book/buy-book.component';

@NgModule({

  declarations: [

    AppComponent,
    FormsComponent,
     SignupComponent,
     SigninComponent,
     SearchBooksComponent,
     CreateBookComponent,
     HeaderComponent,
     BuyBookComponent
  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    FormsModule,

    HttpClientModule,
     NgbModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }