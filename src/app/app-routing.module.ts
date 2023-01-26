import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent, canActivate: [AuthGuard]
  },

  {
    path: 'user/:id',
    component: UserComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
