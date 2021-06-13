import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-main-store',
  templateUrl: './main-store.component.html',
  styleUrls: ['./main-store.component.css']
})
export class MainStoreComponent implements OnInit {

  constructor(private productService:ProductService,private categoryService:CategoryService) { }

  productList:Array<any>=[];
  categories:Array<any>=[];
  ngOnInit(): void {
    this.productService.getProducts().subscribe(results=>{
      this.productList = results;
    });
    this.categoryService.getCategories().subscribe(results=>{
      this.categories= results;
    });
  }

  productsByCategory($categoryID){
    this.productService.getProductsByCategoryID($categoryID).subscribe(results=>{
      this.productList = results;
    })
  }

}
