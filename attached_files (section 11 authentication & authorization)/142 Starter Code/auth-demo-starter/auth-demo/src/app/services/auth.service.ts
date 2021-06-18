import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add//operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }
// send post request to the endpoint when user clicks login
  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials)).map((response) => {
        let result = response.json()
        if (result && result.token) {
          //  store token in localStorage
          localStorage.setItem('token', result.token)
          return true
        }
        else return false
      })
    // .pipe(map((response) => {
    //   console.log(response);

    // }))
  }

  logout() {
    // removes token from localStorage
    localStorage.removeItem('token')
  }

  isLoggedIn() {
    // check if the user is logged in or not
  return localStorage.getItem('token') ? true : false
    // return false;
    // return true;

  }
  get currentUser() {
// get the token from local storage
let token = localStorage.getItem('token')
if(!token) return null
else {
  // decode the token
  let jwtHelper = new JwtHelper()
  console.log(jwtHelper.decodeToken(token));
  return jwtHelper.decodeToken(token)
}
  }
}

