import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCharComponent } from './first-char/first-char.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [FirstCharComponent, UserDetailsComponent, PipeComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
