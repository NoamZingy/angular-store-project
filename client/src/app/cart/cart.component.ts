import { Component, OnInit ,Input,OnChanges, SimpleChanges} from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit ,OnChanges{
  
  constructor(public cartService:CartService) { }
 
  totalCartPrices:number;

  @Input() cart:any = null;
  ngOnInit(): void {
  }
  updatePrice(){
    this.totalCartPrices = this.cart.cartItems.reduce((p1,p2)=>p1+p2.generalPrice,0);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const current = changes.cart.currentValue;
    if(current){
      this.updatePrice();
    }
  }

  getCartOfUser(){
    this.cartService.lastCartOfUser().subscribe(userCart=>{
      this.cart = userCart;
      this.updatePrice();
    })
  }
  deletedItemFromCart($product: any){
    console.log($product);
    this.cartService.deleteItemFromCart($product).subscribe((result)=>{
      this.getCartOfUser();
      
    });
  }

}
