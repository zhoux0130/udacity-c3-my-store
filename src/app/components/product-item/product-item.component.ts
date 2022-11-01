import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: ProductItem;
  amountConst: number[] = [1,2,3,4,5]
  selectedValue: number = 1;

  constructor(private cartService: CartService) {
    this.productItem = {
      id: 0,
      name: '',
      url: '',
      description: '',
      price: 0,
      amount: 0
    }
   }

  ngOnInit(): void {
    this.selectedValue = 1;
  }

  addToCart(product: ProductItem): void{
    product.amount = this.selectedValue;
    this.cartService.addToCart(product);
    alert("Add To Cart Successful!")
  }

}
