import { Component, OnInit,OnChanges,Input,Output,EventEmitter, SimpleChanges} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnChanges {

  constructor(private formBuilder:FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
  }
  @Input() categories:any[]=[];
  @Input() productEdited:any = null;
  @Output() onAddedProduct = new EventEmitter();
  productForm:FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.productForm = this.formBuilder.group({
      productName:[this.productEdited ? this.productEdited.name:'',[Validators.required]],
      productPrice:[this.productEdited ? this.productEdited.price:'',[Validators.required]],
      productImage:[this.productEdited ? this.productEdited.image:'',[Validators.required]],
      productCategory:[this.productEdited ? this.productEdited.categoryID:'',[Validators.required]],
    })
  }
  addProduct(){
      this.onAddedProduct.emit(this.productForm.value);
      this.productForm.reset();
  }
}
