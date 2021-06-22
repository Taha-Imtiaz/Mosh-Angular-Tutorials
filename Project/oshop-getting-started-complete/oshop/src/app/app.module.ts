import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import angular fire module
import { AngularFireModule } from 'angularfire2'; 

// import angular fireDatabase module
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
// import angular fireAuth module
import { AngularFireAuthModule } from 'angularfire2/auth';
// import router module
import { RouterModule } from '@angular/router'; 
// import bootstrap module for adding directives to our components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // initialize firebase app
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // add ngBootstrap module
    NgbModule.forRoot(),
    RouterModule.forRoot([
      // define routes
      { path: '', component: HomeComponent }, //home component
      { path: 'products', component: ProductsComponent }, //productList Component
      { path: 'shopping-cart', component: ShoppingCartComponent }, //shoppingCart component 
      { path: 'check-out', component: CheckOutComponent },  //checkout(when user place shipping details)
      { path: 'order-success', component: OrderSuccessComponent }, //order success
      { path: 'my/orders', component: MyOrdersComponent }, //user see his own orders (Authentication required)
      { path: 'login', component: LoginComponent }, //login component
      { path: 'admin/products', component: AdminProductsComponent }, //admin products
      { path: 'admin/orders', component: AdminOrdersComponent } // admin orders
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
