import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarsService } from './cars.service';
import { CoreModule } from '../core/core.module';
import { CarsAddComponent } from './cars-add/cars-add.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { MineComponent } from './mine/mine.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    RouterModule
  ],
  declarations: [
    CarsAddComponent,
    CarsComponent,
    CarsComponent,
    CarComponent,
    MineComponent
  ],
  providers : [
    CarsService
  ],
  exports: [
    CarsAddComponent,
    CarsComponent,
    CarComponent,
    MineComponent
  ]
})
export class CarsModule { }
