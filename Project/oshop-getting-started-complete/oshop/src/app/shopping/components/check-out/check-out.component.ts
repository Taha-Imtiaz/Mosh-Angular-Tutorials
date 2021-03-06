import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cart$: Observable<ShoppingCart>
  // subscription: Subscription;
 

  constructor(
    private shoppingCartService: ShoppingCartService,
  ){}
  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart()
    //  subscribe to observable
    // this.subscription = cart$.subscribe((cart) => this.cart$ = cart)
  }

 

  
}
