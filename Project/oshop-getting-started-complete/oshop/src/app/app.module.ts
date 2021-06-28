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
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { CustomFormsModule } from 'ng2-validation';
import {DataTableModule} from 'angular-4-data-table';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component'
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';

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
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    BrowserModule,
    // initialize firebase app
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // add ngBootstrap module
    NgbModule.forRoot(),
    // add CustomFormModule for validation
      CustomFormsModule,
    // add form module
    FormsModule,
    // data table module for sorting and pagination
    DataTableModule,
    RouterModule.forRoot([
      // define routes
      // routes for anonymous users

      { path: '', component: ProductsComponent }, //home component
      { path: 'products', component: ProductsComponent }, //productList Component
      { path: 'shopping-cart', component: ShoppingCartComponent }, //shoppingCart component 
      { path: 'login', component: LoginComponent }, //login component

      {
        path: 'check-out', component: CheckOutComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard]

      },  //checkout(when user place shipping details)
      {
        path: 'order-success', component: OrderSuccessComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard]
      }, //order success

      {
        path: 'my/orders', component: MyOrdersComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard]
      }, //user see his own orders (Authentication required)

    

      {
        path: 'admin/products/new', component: ProductFormComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard,AdminAuthGuard]
      }, //add new products

      {
        path: 'admin/products/:id', component: ProductFormComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard,AdminAuthGuard]
      }, //edit product
      {
        path: 'admin/products', component: AdminProductsComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard,AdminAuthGuard]
      }, //admin products

      {
        path: 'admin/orders', component: AdminOrdersComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard,AdminAuthGuard]
      } // admin orders
    ])
  ],
  providers: [
    // register service as provider
    AuthService,
    // register (provide auth-guard) service
    AuthGuard,
    // register user service
    UserService, 
    // register admin auth guard (users who are admin have access to certain routes)
    AdminAuthGuard,
    // register category service
    CategoryService,
     // register product service
     ProductService,
    //  shoppingCartService
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
