import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product
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

 

 
}
