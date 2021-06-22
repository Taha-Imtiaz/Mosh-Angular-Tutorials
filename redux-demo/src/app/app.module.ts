import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // provide store to app
    StoreModule.forRoot({
      // rootreducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }