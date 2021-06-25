import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product
  @Input('show-actions') showActions = true
  @Input('shopping-cart') shoppingCart

  constructor(private cartService: ShoppingCartService) { }

  // implements add to cart
  addToCart() {
    // call add to cart
    this.cartService.addToCart(this.product)
  }

  // remove item from cart
  removeFromCart() {
    this.cartService.removeFromCart(this.product)
  }

  getQuantity() {
    if(!this.shoppingCart) return

    else {
        // get quantity of the items in the cart
    let item = this.shoppingCart.items[this.product.$key]
    //  if item.quantity then return item.quantity else return 0
   return item ? item.quantity : 0
    }
  
  }
}
