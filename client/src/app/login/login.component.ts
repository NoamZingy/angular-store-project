import { Component, OnInit } from '@angular/core';
import { Router} from  '@angular/router';
import { UserService } from '../services/registerService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }
  email:string ='';
  password:string ='';
  hidePass:boolean = false;

  ngOnInit(): void {
  }

  login(){
    const payload = {email:this.email,password:this.password};
    this.userService.login(payload).subscribe((result)=>{
      this.router.navigate(["/store"]);
    },(error)=>{
      alert(error.error);
    })

  }
}
