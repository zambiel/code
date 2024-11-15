import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product-available',
  templateUrl: './product-available.component.html',
  styleUrls: ['./product-available.component.css']
})
export class ProductAvailableComponent implements ProductsComponent {
  products = PRODUCTS;


  constructor() { }

}
