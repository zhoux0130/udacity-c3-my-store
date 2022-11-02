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
  creditNo: string = '';

  errorFlag: boolean = false;

  constructor(private router: Router, private cartService: CartService) { }
  ngOnInit(): void {
  }

  validateCardNo(arg:string): void{
    console.log(/^\d{16}$/.test(arg))
    // 正则表达式判断，字符串是不是正好16个字符，并且都是数字
    if(!/^\d{16}$/.test(arg)){
      this.errorFlag = true;
    }else{
      this.errorFlag = false;
    }
  }

  submitForm(): void{
    const contact: Contact = {
      name: this.name,
      address: this.address,
      creditCard: parseInt(this.creditNo)
    }
  
    this.cartService.ordered(contact);
    this.router.navigateByUrl('/confirmation')
  }
}
