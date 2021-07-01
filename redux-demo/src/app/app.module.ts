import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevToolsExtension, NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
// import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
    // provide store to app
    // StoreModule.forRoot({
    //   // rootreducer
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    // check development mode
    var enhancers = isDevMode()  ? [devTools.enhancer()] : []

    // configure store
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [],
      // devtools
      enhancers
    )
  }
}
