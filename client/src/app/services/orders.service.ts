import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
 
  private BASE_URL:string = '/backend/api';
  
  constructor(private http:HttpClient) { }
  getAllOrders(){
    return this.http.get<Array<any>>(`${this.BASE_URL}/order`);
  }
  addNewOrder(payload:any){
    return this.http.post(`${this.BASE_URL}/order/add`, payload);
  }
  generateReceipts(payload:any){
    return this.http.post(`${this.BASE_URL}/receipt/generateReceipt`,payload);
  }
}
