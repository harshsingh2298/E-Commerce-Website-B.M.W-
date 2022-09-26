import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cart2Component } from './cart2/cart2.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { RegisterCompComponent } from './register-comp/register-comp.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'login',
  component:LoginCompComponent,
  // canActivate:[LogguardGuard]
  },
  {
  path:'registation',
  component:RegisterCompComponent,

  },
  {
  path:'dashboard',
  component:UserDashboardComponent

  },
  {
    path:'cart2',
    component:Cart2Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
