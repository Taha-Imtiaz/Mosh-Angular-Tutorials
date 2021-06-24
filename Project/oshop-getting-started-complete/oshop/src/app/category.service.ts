import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService  {

  constructor(private db: AngularFireDatabase) { }

  // get categories from firebase database
  getCategories() {
    return this.db.list("/categories", {
      // sort all the categories in alphabatical order
      query:{
        orderByChild: 'name'
      }
    })
  }


}
