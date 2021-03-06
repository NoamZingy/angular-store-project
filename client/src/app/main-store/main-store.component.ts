import { Component, OnInit,ViewChild, Input} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { CartService } from '../services/cart.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/registerService/user.service';

@Component({
  selector: 'app-main-store',
  templateUrl: './main-store.component.html',
  styleUrls: ['./main-store.component.css']
})
export class MainStoreComponent implements OnInit {

  constructor(private productService:ProductService,private categoryService:CategoryService,
    private cartService:CartService,private userService:UserService) { }
  
  
  productList:Array<any>=[];
  categories:Array<any>=[];
  isAdmin:boolean;
  cart:any = null;
  selectedProductItem:any=null;
  @ViewChild('drawer',{static:true}) public drawer!:MatDrawer;
  ngOnInit(): void {
    this.getAllProducts();
    this.categoryService.getCategories().subscribe(results=>{
      this.categories= results;
    });
    this.userService.getUser().subscribe((data)=>{
      this.isAdmin = data.user.role === 'admin' ? true :false;
     
      if(!this.isAdmin){
        this.getCartOfUser();
      }
    })

    
  
  }
  getCartOfUser(){
    this.cartService.lastCartOfUser().subscribe(userCart=>{
      this.cart = userCart;
    })
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(results=>{
      this.productList = results;
    });
  }
  addAdminProduct(product){
    if (this.selectedProductItem === null){
    this.productService.addNewProduct(product).subscribe((result)=>{
        this.getAllProducts();
    })
  }
  else {
    this.productService.updateProduct(product).subscribe((result)=>{
      this.getAllProducts();
  })
  }
  }
  productsByCategory($categoryID){
    this.productService.getProductsByCategoryID($categoryID).subscribe(results=>{
      this.productList = results;
    })
  }
  selectedProduct($product:any){
    if(this.isAdmin){
      this.selectedProductItem = $product;
    } else{
      const cartItemPayload:any= {};
      cartItemPayload.cartID = this.cart.cart._id;
      cartItemPayload.product = $product._id;
      cartItemPayload.quantity = $product.quantity;
      this.cartService.addItemToCart(cartItemPayload).subscribe((result)=>{
          this.getCartOfUser();
      });

    }
   
  }

}
