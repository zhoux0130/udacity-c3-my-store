import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  name: string = '';
  address: string = '';
  creditNo: number = 0;

  constructor(private router: Router, private cartService: CartService) { }
  ngOnInit(): void {
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
