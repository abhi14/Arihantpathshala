import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArihantloginComponent } from './arihantlogin/arihantlogin.component';
import { CardanimationComponent } from './cardanimation/cardanimation.component';
import { DarshancalandarComponent } from './darshancalandar/darshancalandar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevdarshanComponent } from './devdarshan/devdarshan.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { LoginmanualComponent } from './loginmanual/loginmanual.component';
import { NewUserComponent } from './new-user/new-user.component';
import { StotraComponent } from './stotra/stotra.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'new-user',
    component: NewUserComponent,
    canActivate:[AuthGuardGuard]
  },
 {
    path: 'abhi',
    component: StotraComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path: 'card',
    component: CardanimationComponent,
  },
  {
    path: 'loginpage',
    component: LoginmanualComponent,
  },
  {
    path: 'dash',
    component: DashboardComponent,
  },
  {
    path: 'devdarshan',
    component: DevdarshanComponent,
    canActivate:[AuthGuardGuard]
  },
  {
    path: 'applogin',
    component: ArihantloginComponent,
  },
  {
    path: 'dev',
    component: DarshancalandarComponent,
  },
  {
    path: '',
    component: LoginmanualComponent,
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
