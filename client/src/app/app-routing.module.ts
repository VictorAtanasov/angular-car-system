import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { CarsAddComponent } from './cars/cars-add/cars-add.component';
import { CarsComponent } from './cars/cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { MineComponent } from './cars/mine/mine.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'users/register', component: RegisterComponent},
  { path: 'users/login', component: LoginComponent},
  { path: 'cars/add', component: CarsAddComponent},
  { path: 'cars/all', component: CarsComponent},
  { path: 'cars/mine', component: MineComponent},
  { path: 'cars/:id', component: CarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
