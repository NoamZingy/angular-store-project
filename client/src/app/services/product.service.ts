import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<Array<any>>('/backend/api/product')
  }
  getProductsByCategoryID(categoryID:string){
    return this.http.get<Array<any>>('/backend/api/product/'+categoryID)
  }
  addNewProduct(product:any){
    const payload = {
      name:product.productName,
      price:product.productPrice,
      image:product.productImage,
      categoryID:product.productCategory
    }
    return this.http.post('/backend/api/product/add',payload)
  }

  updateProduct(product:any){
    const payload = {
      name:product.productName,
      price:product.productPrice,
      image:product.productImage,
      categoryID:product.productCategory
    }
    return this.http.put(`/backend/api/product/update`,payload)
  }
}
