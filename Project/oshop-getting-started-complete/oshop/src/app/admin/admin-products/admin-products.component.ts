import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[]
  // filteredProducts: any[] // show filteredProducts
  subscription: Subscription //subscribe to observable
  tableResource: DataTableResource<Product>
  items: Product[] = []
  itemCount: number

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe((products) => {
      //assign all products to filteredProducts
     this.products = products

      // call initialize table
      this.initializeTable(products)


    })
  }

  // to initialize a data table
  private initializeTable(products: Product[]) {

    // pass all products to table resource
    this.tableResource = new DataTableResource(products)
    //  get all records in a current page
    this.tableResource.query({ offset: 0 }).then((items) => {
      console.log(items);
      
      this.items = items
    })
    // call count method to display the total no records of a table
    this.tableResource.count().then((count) => {
      console.log(count);
      
      this.itemCount = count
    })
  }
  // this method triggers when we change page sorting or pageSize
  reloadItems(params) {
    // waiting for tableResource to load
    if(!this.tableResource) return;

console.log(params);

    //  get all records in a current page
    this.tableResource.query(params).then((items) => this.items = items)
  }

  // filter component that is used for searching
  filter(query: string) {
    console.log(query);

    // filter products
    let filteredProducts = query ? this.products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase())) : this.products

// pass data table to filtered data
this.initializeTable(filteredProducts)


  }
  // ngOnDestroy works like componentWillUnmount
  ngOnDestroy() {
    // unsubscribe from subscription 
    this.subscription.unsubscribe()
  }
  ngOnInit() {
  }

}
