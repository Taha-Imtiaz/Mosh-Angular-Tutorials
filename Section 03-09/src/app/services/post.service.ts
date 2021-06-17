import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { throwError } from 'rxjs/';


// // import catch operator for catching errors
// import { catchError } from 'rxjs/operators';
// import { AppError } from '../common/app-error';
// import { BadInput } from '../common/bad-input';
// import { NotFoundError } from '../common/not-found-error';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  // private url = "https://jsonplaceholder.typicode.com/posts"

  constructor(http: HttpClient) {
    // call the constructor of bse class (dataService)
    super("https://jsonplaceholder.typicode.com/posts",http)
   }

  
}
