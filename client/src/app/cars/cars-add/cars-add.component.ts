import { Component, OnInit } from '@angular/core';
import { CarAddModel } from './car.add.model';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent {

  car: CarAddModel = new CarAddModel();
  message;
  token = localStorage.getItem('token');

  constructor(
    private carsService: CarsService
  ) { }

  addCar () {
    this.carsService.carAdd(this.car, this.token)
      .then(resp => {
        if (resp.success) {
          this.message = 'Your car is added!!!';
        } else {
          if (resp.errors) {
            const firstKey = Object.keys(resp.errors)[0];
            const error = resp.errors[firstKey];
            this.message = error;
          } else {
            this.message = resp.message;
          }
        }
      });
  }

}
