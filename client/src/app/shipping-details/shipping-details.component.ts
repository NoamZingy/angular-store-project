import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from '../services/orders.service';
import {validateCreditCard} from '../helper/validators';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {

  @Input() user: any = null;
  @Output() onOrderDemand = new EventEmitter();
  sendOrder:any=null;
  constructor(private formBuilder: FormBuilder, private ordersService:OrdersService) { }
  orderFormGroup: FormGroup;
  
  order(){
    if(this.orderFormGroup.valid){
      const payload: any = {
        city: this.orderFormGroup.get('city').value,
        street: this.orderFormGroup.get('street').value,
        lastFourDigits: this.orderFormGroup.get('creditcard').value,
        deliveryTime:this.orderFormGroup.get('orderDate').value
      }
  
      this.onOrderDemand.emit(payload);
    }
   
  }

  FillInput(field:string){
    this.orderFormGroup.get(field).setValue(this.user[field]);
  }
  ngOnInit(): void {
    console.log(this.user);
    this.orderFormGroup = this.formBuilder.group({
      city: ['',[Validators.required]],
      street: ['', [Validators.required]],
      orderDate:[new Date(),[Validators.required]],
      creditcard: ['', [Validators.required,validateCreditCard, Validators.maxLength(16)]],
    });
   
  }

}
