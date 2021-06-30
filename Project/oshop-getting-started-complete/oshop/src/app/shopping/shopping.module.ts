import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
  
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent }, //productList Component
      { path: 'shopping-cart', component: ShoppingCartComponent }, //shoppingCart component 

      {
        path: 'check-out', component: CheckOutComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard]

      },  //checkout(when user place shipping details)
      {
        path: 'order-success/:id', component: OrderSuccessComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard]
      }, //order success

      {
        path: 'my/orders', component: MyOrdersComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard]
      }, //user see his own orders (Authentication required)
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ]
})
export class ShoppingModule { }
