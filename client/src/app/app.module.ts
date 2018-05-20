import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterModule } from './users/register.module';
import { CoreModule } from './core/core.module';
import { UsersService } from './users/users.service';
import { HomeComponent } from './home/home.component';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RegisterModule,
    AppRoutingModule,
    CoreModule,
    CarsModule,
  ],
  providers: [
    UsersService,
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
