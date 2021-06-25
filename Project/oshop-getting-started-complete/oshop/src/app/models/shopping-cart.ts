import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
    // items: ShoppingCartItem[]
    constructor(public items: ShoppingCartItem[]) { }
  
    get productIds() {
        // return the id's (keys)of a product in a cart
        return Object.keys(this.items)
    }
  
    get totalItemsCount() {
        // total # of items in shopping cart
        let count = 0

        for (let productId in this.items) {
            count += this.items[productId].quantity
        }
        return count
    }
}