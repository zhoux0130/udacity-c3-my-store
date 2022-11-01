import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  order:Order = new Order();

  constructor(private cartService: CartService) { 
  }

  ngOnInit(): void {
    console.log(this.cartService.getOrder())
    this.order = this.cartService.getOrder();
    this.order.totalAmount = Math.round(this.order.totalAmount*100)/100
  }

}
