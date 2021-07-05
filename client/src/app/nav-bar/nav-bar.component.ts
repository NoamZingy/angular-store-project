import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/registerService/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  user:any = 'guest';
  ngOnInit(): void {
    this.userService.getUser().subscribe((data:any) => {
      this.user = data["user"];
      console.log(this.user);
    });
  }
  logout(){
    this.userService.logoutUser().subscribe((result)=>{
        this.router.navigate(['/'])
    })
  }
signUp(){
  this.router.navigate(['/register'])
}
Resume(){
  this.router.navigate(['/store'])
}
}
