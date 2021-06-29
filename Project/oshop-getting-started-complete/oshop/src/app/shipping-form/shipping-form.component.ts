import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'shared/services/auth.service';
import { Order } from 'shared/models/order';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy {
@Input('cart') cart: ShoppingCart

  shipping = {};
  userId: string;
  userSubscription: Subscription

   constructor(
    private router: Router,
    private orderService: OrderService,
    private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe((user) => this.userId = user.uid)

  }
  ngOnDestroy() {
    // unsubscribe from subscription
    this.userSubscription.unsubscribe()
  }

  async placeOrder() {
    console.log(this.shipping);

    let order = new Order(this.userId, this.shipping, this.cart)
    let result = await this.orderService.placeOrder(order)

    //  clearing shopping cart
    // this.shoppingCartService.clearCart()
    
    //  navigate to order success page
    this.router.navigate(['/order-success', result.key])
  }

}
