import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactService } from './contact.service';
import { ContactActions } from '../actions/contactActions';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule
  ],
  providers: [ContactService, ContactActions ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (ngRedux: NgRedux<any>) {
    ngRedux.configureStore(rootReducer, {}, [ thunk ], []);
  }  
}
