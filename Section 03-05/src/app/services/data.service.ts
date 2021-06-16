// extracting a reusable data service

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/';


// import catch operator for catching errors
import { catchError,map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
@Injectable({
  providedIn: 'root'
})
export class DataService {
//   private url 
//   = "https://jsonplaceholder.typicode.com/posts"

  constructor(private url : string, private http: HttpClient) { }

  // get All Posts
  getAll() {
    // send http get request to server
    // subscribe is used to notify when result is ready
    // get returns an observable
    return this.http.get(this.url)              //line 27 returns an observable
    .pipe(
        // transforming response object to array of javascriptr objects
        map((response:any) => response),
        // catch error if any
      catchError(this.handleError))
  }

  // createPost
  create(resource) {
    // returns an observable
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
        // transforming response object to array of javascriptr objects
        map((response:any) => response),
        // catch error if any
      catchError(this.handleError))
  }

  // update post
  update(resource) {
    return this.http.patch(`${this.url}/${resource.id}`, JSON.stringify({ isRead: true }))
    .pipe(
         // transforming response object to array of javascriptr objects
         map((response:any) => response),
         // catch error if any
      catchError(this.handleError))
  }

  // deletePost 
  delete(id) {
    console.log(id);

    return this.http.delete(`${this.url}/${id}`)
    .pipe(
         // transforming response object to array of javascriptr objects
         map((response:any) => response),
         // catch error if any
      catchError(this.handleError))
  }

  // reusable error handler for using it at multiple places

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()))
    }
    if (error.status === 404) {
      console.log(error);
      return throwError(new NotFoundError());
    }
    return throwError(new AppError(error));
  }
}
