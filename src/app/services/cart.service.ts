import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../models/order';
import { Contact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  myProducts: ProductItem[] = [];
  totalAmount: number = 0;
  order: Order = new Order();


  //order: BehaviorSubject<Order> = new BehaviorSubject<Order>(new Order());

  constructor() { }

  addToCart(product: ProductItem): void {
    const existedItem = this.myProducts.find(cur => cur.id === product.id);
    if(existedItem){
      product.amount += existedItem.amount;
      this.myProducts = this.myProducts.filter((item)=> item.id !== product.id)
    }
    this.myProducts.unshift(product);
  }

  ordered(contact: Contact): void{
    this.order = {
      contact,
      items: this.myProducts,
      totalAmount: this.totalAmount
    }
  }

  getOrder(): Order{
    return this.order;
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
