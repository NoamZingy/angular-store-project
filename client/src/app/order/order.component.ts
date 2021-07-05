import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { CartService } from '../services/cart.service';
import { OrdersService } from '../services/orders.service';
import { UserService } from '../services/registerService/user.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private cart_service:CartService,private userService:UserService,
     private ordersService:OrdersService,private router:Router,private dialog: MatDialog) { }
  cart:any = null;
  user:any = null;
  link:string=null;
  @ViewChild('dialogAlert') dialogAlert: TemplateRef<any>;


  opendialogAlert() {
    this.dialog.open(this.dialogAlert);

  }

  
  
  ngOnInit(): void {
    this.userService.getUser().subscribe((data:any) => {
     
      this.user = data["user"];
      this.fetchCartOfUser();
    });
  
  }
  backToShop(){
    this.router.navigate(['/store']);
  }

  orderDelivery($payload){
    const totalPrice = this.cart.cartItems.reduce((prod1,prod2)=>prod1+prod2.generalPrice,0);
    const payloadOrder = {...$payload};
    payloadOrder.cartID = this.cart.cart._id;
    payloadOrder.userID = this.user._id;
    payloadOrder.finalPrice = totalPrice;

    this.ordersService.addNewOrder(payloadOrder).subscribe((item:any)=>{
      let orderedProductList:string  = "";
      this.cart.cartItems.forEach(cartItem => {
        orderedProductList +=`\n ${cartItem.product.name} * ${cartItem.quantity} = ${cartItem.generalPrice} `;
      });
      const receiptString1:string = `receipt identifier: ${item._id}\n
        Products ordered: \n
       ${orderedProductList} 
       Total Price : ${totalPrice}`
       console.log(receiptString1);
       const payloadReceipt = {client:this.user._id,receiptString:receiptString1}
       this.ordersService.generateReceipts(payloadReceipt).subscribe((receiptLink:any)=>{
        this.link = receiptLink.path;

        this.opendialogAlert();
        this.deleteCart($payload)
       })
      
      
      });
     
  }
deleteCart($payload){
  const payloadOrder = {...$payload};
  payloadOrder.cartID = this.cart.cart._id;
    this.cart_service.clearCart(payloadOrder.cartID).subscribe((result)=>{
      this.fetchCartOfUser();
    });
  
}

  fetchCartOfUser(){
    this.cart_service.lastCartOfUser().subscribe((cartObj)=>{
      this.cart = cartObj;  
    });
  }

}
