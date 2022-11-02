import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: ProductItem[] = [];

  constructor(private http: HttpClient) { }


  getById(id: number): ProductItem{
    if(this.products.length === 0){
      this.getProducts();
    }
    const item = this.products[id-1]
    return item;
  }

  fetchProducts(): Observable<ProductItem[]>{
    return this.http.get<ProductItem[]>("../assets/data.json");
  }

  getProducts(): ProductItem[] {
    this.fetchProducts().subscribe(res => {
      res.map(item =>{
        item.amount = 0;
      })

      this.products = res;
    })
    return this.products;
  }
}
