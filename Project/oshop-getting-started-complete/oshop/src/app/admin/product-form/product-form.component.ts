import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$
  // initially product = {} because we get it from firebase
  product = {}
  id
  constructor(
    private router: Router,
    // inject activated route to get a parameter from a route
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService

  ) {
    this.categories$ = categoryService.getAll()

    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id) {
      this.productService.getProduct(this.id)
        .take(1)                      //take 1 value and unsubscribe automatically
        .subscribe((product) => this.product = product)
    }
  }

  //  save method save data in firebase database
  save(product) {
    console.log(product);
    // check if productId exists or not
    if (this.id) {
      // if id exists then update a product
      this.productService.updateProduct(this.id, product)
    }
    else {
      // create a new product to add to the database
      this.productService.create(product)
    }
    // navigate to the list of products
    this.router.navigate([`/admin/products`])

  }

  delete() {
    // for deleting a product from firebase
    if (confirm(`Are you sure you want to delete this product?`)) {
      this.productService.deleteProduct(this.id)

      // navigate to the list of products
      this.router.navigate([`/admin/products`])
    }
  }

  ngOnInit() {
  }

}
