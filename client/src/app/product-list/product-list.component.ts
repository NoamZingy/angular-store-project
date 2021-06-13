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
  @Output() onSelectedCategory= new EventEmitter();

  search:string =""
  ngOnInit(): void {
  }

  selectCategory(categoryID:string){
    this.onSelectedCategory.emit(categoryID);
  }
}
