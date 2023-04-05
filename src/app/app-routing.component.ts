import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SemAcessoComponent } from './sem-acesso/sem-acesso.component';
import { AcessoGuard } from './shared/guards/acesso.guard';

const routes: Routes = [
  // {path:``, pathMatch: `full`, redirectTo: `home`},

  {
    path: 'home',
    component:HomeComponent,
    canActivate: [AcessoGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AcessoGuard]

  },
  {
    path: 'sem-acesso',
    component: SemAcessoComponent,
    // canActivate: [AcessoGuard]
  },
  // {
  //   path: '**',
  //   component: LoginComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
