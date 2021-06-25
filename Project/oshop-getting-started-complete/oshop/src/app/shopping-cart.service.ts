import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/map'

import { ShoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    // create shopping-cart
    return this.db.list('/shopping-carts').push({
      // generate timeStamp of current Time
      dateCreated: new Date().getTime()
    })
  }

  private getItem(cartId: string, productId: string) {
    // get item from firebase database
    return this.db.object(`/shopping-carts/${cartId}/items/${productId}`)
  }

  async getCart() : Promise<Observable<ShoppingCart>>  {
    //  read id of the document
    let cartId = await this.getOrCreateCartId()

    // reading a cart from firebase
    return this.db.object(`/shopping-carts/${cartId}`).map((x : any) => new ShoppingCart(x.items))

  }

  // get orCreate cart
  private async getOrCreateCartId(): Promise<string> {
    // get shopping cart id from localStorage
    let cartId = localStorage.getItem('cartId')

    if (!cartId) {
      // create shopping-cart id

      let result = await this.create()
      // store new id in localStorage
      localStorage.setItem('cartId', result.key)

      //  return cart with new id 
      return result.key
    }
    else {
      // add product to cart
      return cartId
    }
  }

  async addToCart(product: Product) {
    this.updateItemQuantity(product, 1)
  }

  async removeFromCart(product: Product) {
   this.updateItemQuantity(product, -1)
  }
  private async updateItemQuantity(product: Product, change: number) {
    // get shopping cart refrence
    let cartId = await this.getOrCreateCartId()

    let item$ = this.getItem(cartId, product.$key)
    // use take(1) to unsubscribe
    item$.take(1).subscribe((item: any) => {
      // if (item.$exists()) {
      //   // if item already exists
      //   item$.update({ product:product, quantity: item.quantity + 1 })
      // }

      // add item 
      item$.update({ product: product, quantity: (item.quantity || 0) + change })

    })
  }
}
