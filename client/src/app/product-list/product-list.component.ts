import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  @Input() products:Array<any>=[];
  @Input() categories:Array<any>=[];
  @Input() isAdmin:boolean = false;
  @Output() onSelectedCategory= new EventEmitter();
  @Output() onSelectedProduct= new EventEmitter();

  search:string =""
  ngOnInit(): void {
  }

  selectedProduct(product:any){
    this.onSelectedProduct.emit(product)
  }
  selectCategory(categoryID:string){
    this.onSelectedCategory.emit(categoryID);
  }
}
