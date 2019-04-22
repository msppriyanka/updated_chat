import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { RouterModule,Routes } from '@angular/router'

import { LoginComponent } from './user/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CookieService } from 'ngx-cookie-service';

import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    ChatModule,
    UserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
     
    

    RouterModule.forRoot([
      {path:'login',component:LoginComponent ,pathMatch: 'full'},
      {path:'',redirectTo:'login' ,pathMatch: 'full'},
      {path:'*',component:LoginComponent },
      {path:'**',component:LoginComponent },
      

    ])

  ],
  
  providers: [AppService ,CookieService ],
  bootstrap: [AppComponent],
  
  
  },
)
export class AppModule { }
