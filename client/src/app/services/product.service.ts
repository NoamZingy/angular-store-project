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
}
