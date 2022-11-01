import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ProductItem } from 'src/app/models/product-item';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myProducts: ProductItem[] = [];
  totalAmount: number = 0;
  name: string = '';
  address: string = '';
  creditNo: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.myProducts = this.cartService.getMyCart();
    const total = this.cartService.calculate();
    this.totalAmount = Math.round(total*100)/100;
  }

  submitForm(): void{
    const contact: Contact = {
      name: this.name,
      address: this.address,
      creditCard: this.creditNo
    }
  
    this.cartService.ordered(contact);
    this.router.navigateByUrl('/confirmation')
  }
}
