import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  getOrders() {



    // // add a authorization header to protect (secure) api endpoint
    // let headers = new Headers()
    // // get token from localStorage
    // let token = localStorage.getItem('token')
    // headers.append('Authorization', `Bearer ${token}`)
    
    // // create requestOptionsObject  
    // let options = new RequestOptions({headers:headers})

    // return this.authHttp.get('/api/orders',options)
    //   .map(response => response.json());


      // authHttp implements logic at backend they get token from local storage add beaer to token and add authorization header
      return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
