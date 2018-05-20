import { Component, OnInit, DoCheck } from '@angular/core';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  constructor(
    private carsService: CarsService,
    private router: Router,
  ) { }

  userToken = localStorage.getItem('token');
  cars;
  message;


  getCars (token) {
    this.carsService.getCar('cars/mine', token)
      .then(resp => {
        if (resp.length > 0) {
          this.cars = resp;
        } else {
          this.message = 'No cars to show';
        }
      });
  }

  deleteCar(id) {
    this.carsService.post(`cars/delete/${id}`, {}, this.userToken)
      .then(resp => {
        console.log(resp);
        if (resp.success) {
          this.getCars(this.userToken);
        }
      });
  }

  ngOnInit() {
    if (this.userToken !== null) {
      this.getCars(this.userToken);
    } else {
      this.router.navigateByUrl('users/login');
    }
  }

}
