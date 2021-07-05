import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() product:any = null;
@Input() isAdmin:boolean = false;
@Output() onSelectProduct = new EventEmitter();
quantity:number =1;
  constructor( private MatSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  select(){
      if(this.isAdmin){
        const payload = {...this.product}
        this.onSelectProduct.emit(payload);
      }
  }
  addItemToCart(){
    const payload:any = {...this.product,quantity:this.quantity};
    this.onSelectProduct.emit(payload);
    this.MatSnackBar.open(`${payload.name} added successfully`, 'Undo', {
      duration: 3000
    });
  }
}
