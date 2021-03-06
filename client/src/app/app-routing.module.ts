import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainStoreComponent } from './main-store/main-store.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'register' ,component:RegisterComponent},
  {path:'',component:LoginComponent},
  {path:'store',component:MainStoreComponent},
  {path:'order',component:OrderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
