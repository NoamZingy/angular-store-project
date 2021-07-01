import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  lastCartOfUser(){
    return this.http.get('/backend/api/shoppingCart/lastCartOfUser');
  }
  addItemToCart(cartItem:any){
    return this.http.post('/backend/api/cartItem/add',cartItem);
  }
  deleteItemFromCart(product:any){
    const payload = product._id
    return this.http.delete(`/backend/api/cartItem/delete/${payload}`);
  }
}
