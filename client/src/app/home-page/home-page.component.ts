import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from '../services/orders.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgbCarouselConfig] 
})
export class HomePageComponent implements OnInit {
  images = ["https://images.pexels.com/photos/3728311/pexels-photo-3728311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2090903/pexels-photo-2090903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2224358/pexels-photo-2224358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",]

  constructor(config: NgbCarouselConfig, private OrderService:OrdersService, private productService:ProductService) { 
    config.interval = 4000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
  orders:Array<any>=[];
  productList:Array<any>=[];
  ngOnInit(): void {
    this.OrderService.getAllOrders().subscribe(results=>{
      this.orders= results;})
      this.productService.getProducts().subscribe(results=>{
        this.productList = results;
      });
  }



}
