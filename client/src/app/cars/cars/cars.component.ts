import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars;
  page = 2;
  message;

  constructor(
    private carsService: CarsService
  ) { }

  getCars () {
    this.carsService.getAll('cars/all')
      .then(resp => {
        this.cars = resp;
        if (this.cars.length === 0) {
          this.message = 'No cars to show :(';
        }
      });
  }

  prevPage () {
    if (this.page > 2) {
      this.page -= 2;
      this.carsService.getAll(`cars/all?page=${this.page}`)
        .then(resp => {
          if (resp.length !== 0) {
            this.cars = resp;
            this.page += 1;
          }
        });
    }
  }

  nextPage () {
    this.carsService.getAll(`cars/all?page=${this.page}`)
      .then(resp => {
        if (resp.length !== 0) {
          this.cars = resp;
          this.page += 1;
        }
      });
  }

  search (val) {
    if (val !== '') {
      this.carsService.getAll(`cars/all?search=${val}`)
      .then(resp => {
        if (resp.length !== 0) {
          this.cars = resp;
        }
      });
    }
  }

  ngOnInit() {
    this.getCars();
  }

}
