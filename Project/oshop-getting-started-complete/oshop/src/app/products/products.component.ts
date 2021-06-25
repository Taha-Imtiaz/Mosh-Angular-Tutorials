import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/switchMap'
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = []
  filteredProducts: Product[] = []
  category: string
  cart: any
  subscription:Subscription

  constructor(
    route: ActivatedRoute, // to get quey params
    productService: ProductService,
   private shoppingCartService:ShoppingCartService

  ) {
   

    // get all products from firebase
    productService
    .getAll().switchMap((products: any) => {
      this.products = products;
     return route.queryParamMap;
     })
      .subscribe((params) => {
        //read query params from routerLink
        this.category = params.get("category")   
  
        this.filteredProducts = (this.category) ? this.products.filter((product) =>
          product.category === this.category) : this.products
      })
   

   
  }

async ngOnInit() {
let cart = await this.shoppingCartService.getCart()
// subscribe to observable
this.subscription = cart.subscribe((cart) => this.cart = cart)
}

// onDestroyInterface runs when component removes from DOM
ngOnDestroy() {
// unsubscribe() from subscription
this.subscription.unsubscribe()
}

}
