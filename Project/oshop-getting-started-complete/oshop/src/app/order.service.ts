import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order) {
    // add order to firebase
    let result = await this.db.list('/orders').push(order);

    // clear shopping cart
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() { 
    // get all orders from firebase
    return this.db.list('/orders');
  }

  getOrdersByUser(userId: string) {
    // get all orders of a single user
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId        
      }
    });
  }
}
