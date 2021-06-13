import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  @Input() categories:any[]=[];
  @Output() onAddedProduct = new EventEmitter();
  productForm:FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.productForm = this.formBuilder.group({
      productName:['',[Validators.required]],
      productPrice:['',[Validators.required]],
      productImage:['',[Validators.required]],
      productCategory:['',[Validators.required]],
    })
  }
  addProduct(){

  }
}
