import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpService } from './http.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    MessagesComponent
  ],
  providers: [
    HttpService
  ],
  exports: [
    NavbarComponent,
    MessagesComponent
  ]
})
export class CoreModule { }
