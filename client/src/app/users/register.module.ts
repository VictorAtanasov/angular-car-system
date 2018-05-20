import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers : [
    UsersService
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class RegisterModule { }
