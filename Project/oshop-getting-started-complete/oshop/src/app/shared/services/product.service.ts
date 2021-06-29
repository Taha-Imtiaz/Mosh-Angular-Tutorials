import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    // save new product in firebase database in product collection
    return this.db.list("/products").push(product)
  }
  getAll() {
    // get all products from firebase database
    return this.db.list(`/products`)
  }

  getProduct(productId) {
    // get specific product from firebase
    return this.db.object(`/products/${productId}`)
  }

  updateProduct(productId, product) {
    // update a product
  return this.db.object(`/products/${productId}`).update(product)
  }

 
  deleteProduct(productId) {
     // delete Product
    return this.db.object(`/products/${productId}`).remove()
  }
}
