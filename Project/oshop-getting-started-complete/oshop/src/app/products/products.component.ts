import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'shared/models/product';
import { ProductService } from 'shared/services/product.service';
import 'rxjs/add/operator/switchMap'
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []
  filteredProducts: Product[] = []
  category: string
  cart$: Observable<ShoppingCart>
  // subscription:Subscription

  constructor(
    private route: ActivatedRoute, // to get quey params
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart()   
    this.populateProducts()
  }

  private populateProducts() {
     // get all products from firebase
     this.productService
     .getAll().switchMap((products: any) => {
       this.products = products;
       return this.route.queryParamMap;
     })
     .subscribe((params) => {
       //read query params from routerLink and then filtered products
       this.category = params.get("category")
       this.applyFilter()


     })
  }
  private applyFilter() {
    this.filteredProducts = (this.category) ? this.products.filter((product) =>
      product.category === this.category) : this.products
  }
  // onDestroyInterface runs when component removes from DOM
  // ngOnDestroy() {
  // // unsubscribe() from subscription
  // this.subscription.unsubscribe()
  // }

}
