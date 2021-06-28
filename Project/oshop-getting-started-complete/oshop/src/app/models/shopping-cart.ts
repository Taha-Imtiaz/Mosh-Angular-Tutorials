import { Product } from "./product";
import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
    items: ShoppingCartItem[] = []

    constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {}
        for (let productId in itemsMap) {
            let item = itemsMap[productId]
            console.log(itemsMap[productId]);

            this.items.push(new ShoppingCartItem({
                ...item,
                $key: productId
            }))
        }
    }

    // get productIds() {
    //     // return the id's (keys)of a product in a cart
    //     return Object.keys(this.items)
    // }

    getQuantity(product: Product) {
        // console.log(product);

        // get quantity of the items in the cart
        let item = this.itemsMap[product.$key]
        //  if item.quantity then return item.quantity else return 0
        return item ? item.quantity : 0

    }
    get totalPrice() {
        let sum = 0
        for (let productId in this.items) {
            // console.log(productId);
            sum += this.items[productId].totalPrice
        }
        return sum
    }

    get totalItemsCount() {
        // total # of items in shopping cart
        let count = 0

        for (let productId in this.itemsMap) {
            // console.log(this.items[productId].quantity);

            count += this.itemsMap[productId].quantity
        }
        return count
    }
}