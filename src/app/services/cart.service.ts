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
  order: BehaviorSubject<Order> = new BehaviorSubject<Order>(new Order());

  count = new BehaviorSubject<number>(0);
  editedProducts = new BehaviorSubject<ProductItem[]>([]);
  total: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(product: ProductItem): void {
    const existedItem = this.myProducts.find(cur => cur.id === product.id);
    if(existedItem){
      product.amount += existedItem.amount;
      this.myProducts = this.myProducts.filter((item)=> item.id !== product.id)
    }
    this.myProducts.unshift(product);
    this.count.next(this.getCount());
    this.editedProducts.next(this.myProducts);
    this.total.next(this.getTotal());
  }

  getTotal(){
    let sum = 0;
    this.myProducts.forEach(p => sum += p.amount * p.price);
    return Math.round(sum * 100) / 100;
  }

  getCount(){
    let sum = 0;
    this.myProducts.forEach(p => sum += p.amount);
    return sum; 
  }

  ordered(contact: Contact): void{
    const order = {
      contact,
      items: this.myProducts,
      totalAmount: this.total.getValue()
    }

    this.order.next(order);
  }

  getOrder(): Order{
    return this.order.getValue();
  }

  getMyCart(): ProductItem[]{
    return this.myProducts;
  }

  removeFromCart(product: ProductItem): void{
    this.myProducts = this.myProducts.filter((item)=> item.id !== product.id)
    this.editedProducts.next(this.myProducts);
    this.count.next(this.getCount());
    this.total.next(this.getTotal());
  }

  
}
