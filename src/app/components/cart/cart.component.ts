import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ProductItem } from 'src/app/models/product-item';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myProducts: Observable<ProductItem[]> = new Observable<ProductItem[]>();
  totalAmount: Observable<number> = new Observable<number>();
  count: Observable<number> = new Observable<number>();
  
  name: string = '';
  address: string = '';
  creditNo: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.myProducts = this.cartService.editedProducts;
    this.totalAmount = this.cartService.total;
    this.count = this.cartService.count;
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
