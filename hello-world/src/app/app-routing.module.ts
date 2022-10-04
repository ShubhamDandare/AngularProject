import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyBookComponent } from './buy-book/buy-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { HeaderComponent } from './header/header.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'searchbooks', component: SearchBooksComponent},
  { path: 'savebook', component: CreateBookComponent},
  { path: 'buybook', component: BuyBookComponent}
  // { path: 'searchresult', component: SearchResultComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
