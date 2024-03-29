import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    FormsModule,
  
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
