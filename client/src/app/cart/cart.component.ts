import { Component, OnInit ,Input,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit ,OnChanges{

  constructor() { }
 
  totalCartPrices:number;

  @Input() cart:any = null;
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const current = changes.cart.currentValue;
    if(current){
      this.totalCartPrices = this.cart.cartItems.reduce((p1,p2)=>p1+p2.generalPrice,0);
    }
  }

}
