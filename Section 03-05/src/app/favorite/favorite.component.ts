import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
// mark isFavorite as Input Property by the use of input decorator

// making alias of isFavorite as is-favorite
@Input('is-favorite') isFavorite: boolean
@Output() change = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isFavorite = !this.isFavorite
    // raise the change event
    this.change.emit()


  }

}
