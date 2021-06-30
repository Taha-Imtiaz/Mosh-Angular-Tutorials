import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { DataTableModule } from 'angular-4-data-table';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      // define routes
      // routes for anonymous users




      {
        path: 'admin/products/new', component: ProductFormComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard, AdminAuthGuard]
      }, //add new products

      {
        path: 'admin/products/:id', component: ProductFormComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard, AdminAuthGuard]
      }, //edit product
      {
        path: 'admin/products', component: AdminProductsComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard, AdminAuthGuard]
      }, //admin products

      {
        path: 'admin/orders', component: AdminOrdersComponent,
        // canActivate property for protecting routes
        canActivate: [AuthGuard, AdminAuthGuard]
      } // admin orders
    ])
  ],


  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,

  ],
  providers: [
    AdminAuthGuard,
  ]
})
export class AdminModule { }
