import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{RouterModule,Routes}from '@angular/router';
import { ChatBoxComponent } from '../chat/chat-box/chat-box.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'sign-up',component:SignupComponent}
    ])
    
  ],
  

})
export class UserModule { }
