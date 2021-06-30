import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { SharedModule } from 'shared/shared.module';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';

// import angular fire module
// import angular fireDatabase module
// import angular fireAuth module
// import router module
// import bootstrap module for adding directives to our components
@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    // initialize firebase app
    AngularFireModule.initializeApp(environment.firebase),
   
  
    RouterModule.forRoot([
      // define routes
      // routes for anonymous users

      { path: '', component: ProductsComponent }, //home component
      { path: 'login', component: LoginComponent }, //login component
      



     
    ])
  ],
  providers: [
    // register admin auth guard (users who are admin have access to certain routes)


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
