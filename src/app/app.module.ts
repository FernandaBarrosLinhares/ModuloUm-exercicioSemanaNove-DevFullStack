import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { SemAcessoComponent } from './sem-acesso/sem-acesso.component';
import { AppRoutingModule } from './app-routing.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SemAcessoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
