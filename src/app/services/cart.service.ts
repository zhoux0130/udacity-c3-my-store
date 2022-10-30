import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  myProducts: ProductItem[] = [];
  totalAmount: number = 0;

  constructor() { }

  addToCart(product: ProductItem): void {
    const existedItem = this.myProducts.find(cur => cur.id === product.id);
    if(existedItem){
      product.amount += existedItem.amount;
      this.myProducts = this.myProducts.filter((item)=> item.id !== product.id)
    }
    this.myProducts.unshift(product);
  }

  getMyCart(): ProductItem[]{
    return this.myProducts;
  }

  removeFromCart(product: ProductItem): void{
    this.myProducts = this.myProducts.filter((item)=> item.id !== product.id)
  }

  calculate(): number{
    this.totalAmount = 0;
    this.myProducts.map(item=>{
      this.totalAmount += (item.amount * item.price);
    })
    return this.totalAmount;
  }
}
