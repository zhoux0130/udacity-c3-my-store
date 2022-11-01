import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: ProductItem = new ProductItem();
  @Output() removeItemFromCart: EventEmitter<ProductItem> = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  removeFromCart(): void{
    console.log('000')
    this.removeItemFromCart.emit(this.product);
    this.cartService.removeFromCart(this.product);
  }

  caculateTotal(): void {
    this.cartService.total.next(this.cartService.getTotal());
    this.cartService.count.next(this.cartService.getCount());
  }
}
