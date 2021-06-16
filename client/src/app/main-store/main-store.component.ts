import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
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
  selectedProductItem:any=null;
  @ViewChild('drawer',{static:true}) public drawer!:MatDrawer;
  ngOnInit(): void {
    this.getAllProducts();
    this.categoryService.getCategories().subscribe(results=>{
      this.categories= results;
    });
    this.drawer.open();
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(results=>{
      this.productList = results;
    });
  }
  addAdminProduct(product){
    this.productService.addNewProduct(product).subscribe((result)=>{
        this.getAllProducts();
    })
  }
  productsByCategory($categoryID){
    this.productService.getProductsByCategoryID($categoryID).subscribe(results=>{
      this.productList = results;
    })
  }
  selectedProduct($product:any){
    this.selectedProductItem = $product;
  }

}
