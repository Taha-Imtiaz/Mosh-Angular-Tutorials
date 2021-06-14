import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  // mark isFavorite as Input Property by the use of input decorator

  // making alias of isFavorite as is-favorite
  @Input('is-favorite') isFavorite: boolean
  @Output('change') click = new EventEmitter()



  onClick() {
    this.isFavorite = !this.isFavorite
    // raise the change event

    // pass data when raising an event
    this.click.emit({
      newValue: this.isFavorite
    })


  }

}
export interface FavoriteChangedEventArgs {
  newValue: boolean
}