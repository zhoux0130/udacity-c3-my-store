import { Contact } from "./contact";
import { ProductItem } from "./product-item";

export class Order {

  contact: Contact;
  items: ProductItem[];
  totalAmount: number;

  constructor(){
    this.contact = new Contact();
    this.items = [];
    this.totalAmount = 0;
  }
}