import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductItem } from 'src/app/models/product-item';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: ProductItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

}
