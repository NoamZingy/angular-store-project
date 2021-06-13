import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(payload:any){
    return this.http.post('/backend/api/user/add' , payload);
  } 
  login(payload:any){
    return this.http.post('/backend/api/user/login',payload);
  }






}
