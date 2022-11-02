import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  productItem: ProductItem;
  amountConst: number[] = [1,2,3,4,5]
  selectedValue: number = 1;

  constructor(private productService: ProductService, private cartService:
     CartService,private activatedRoute: ActivatedRoute) {
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
    const itemId:number = this.activatedRoute.snapshot.params['id'];

    this.productService.fetchProducts().subscribe(res => {
      res.map(item => {

        if(item.id == itemId){
          item.amount = 0;
          this.productItem = item;
        }
      })
    })
  }

  addToCart(product: ProductItem): void{
    product.amount = this.selectedValue;
    this.cartService.addToCart(product);
    alert("Add To Cart Successful!")
  }

}
