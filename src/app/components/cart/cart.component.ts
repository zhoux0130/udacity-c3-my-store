import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myProducts: ProductItem[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.myProducts = this.cartService.getMyCart();
    const total = this.cartService.calculate();
    this.totalAmount = Math.round(total*100)/100;
  }

}
