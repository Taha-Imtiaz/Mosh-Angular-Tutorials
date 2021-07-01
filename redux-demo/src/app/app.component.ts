import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { INCREMENT } from './actions';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
 @select('counter') count 
//  @select(['messaging', 'newMessages']) newMessages
// //  messaging.newMessages
// @select((state: IAppState) => state.messaging.newMessages) newMessagesCount

  constructor(private ngRedux: NgRedux<IAppState>) {

// ngRedux.subscribe(() => {
//   // get state (current State of store)
//    let store = ngRedux.getState();
//   this.counter = store.counter
// })


  }
  increment() {
    this.ngRedux.dispatch({
      type: INCREMENT
    })
  }
}
