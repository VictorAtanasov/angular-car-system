import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers : [
    UsersService
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
