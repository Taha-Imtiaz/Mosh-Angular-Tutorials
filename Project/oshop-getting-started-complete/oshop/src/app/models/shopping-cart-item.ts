import { Product } from "./product";

export class ShoppingCartItem {
    $key: string
    title: string
    imageUrl: string
    price: number
    quantity: number

constructor(init?: Partial<ShoppingCartItem> ) {
    // init is a object that looks like shopping cart item
    // copy all properties of items
    Object.assign(this, init)
}

    get totalPrice() {
        return this.price * this.quantity
    }
}