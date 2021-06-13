import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { isMatch } from '../helper/validators';
import {UserService} from '../services/registerService/user.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private formBuilder:FormBuilder , private RegisterService: UserService,private router:Router) { }
  firstPartGroup:FormGroup;
  secondPartGroup:FormGroup
  hidePass:boolean = true;
  confirmHidePass:boolean = true;
  ngOnInit(): void {
    this.firstPartGroup = this.formBuilder.group({
      ID:['',[Validators.required,Validators.maxLength(9)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    },{
    validator:isMatch('password','confirmPassword')
    }
    )
this.secondPartGroup = this.formBuilder.group({
  city:['',[Validators.required]],
  street:['',[Validators.required]],
  firstName:['',[Validators.required]],
  lastName:['',[Validators.required]]
}
)
  }


   registerUser(){
    const payload = {...this.firstPartGroup.value,...this.secondPartGroup.value};
    console.log(payload);
    this.RegisterService.register(payload).subscribe((result)=>{
      this.router.navigate['/login'];
    })
  
  }

}
