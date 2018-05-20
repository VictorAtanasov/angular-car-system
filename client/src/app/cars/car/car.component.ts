import { Component, OnInit, DoCheck } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarInfo } from './car.model';
import { ReviewInfo } from './review.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, DoCheck {

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private router: Router
  ) { }

  carId = this.route.snapshot.paramMap.get('id');
  userToken = localStorage.getItem('token');
  car = CarInfo || {};
  reviews = ReviewInfo || [];
  ifReviews = false;
  liked = false;
  message;
  reviewMessage;

  getCar (id) {
    this.carsService.getCar(`cars/details/${id}`, this.userToken)
      .then(resp => {
        this.car = resp;
      });
  }

  getReviews (id) {
    this.carsService.getCar(`cars/details/${id}/reviews`, this.userToken)
    .then(resp => {
      if (resp.length !== 0) {
        this.reviews = resp;
        this.ifReviews = true;
      }
    });
  }

  comment (text, select) {
    const data = {
      'rating': select,
      'comment': text
    };
    this.carsService.post(`cars/details/${this.carId}/reviews/create`, data, this.userToken)
      .then(resp => {
        this.reviewMessage = resp.message;
        this.getReviews(this.carId);
      });
  }

  like () {
    this.carsService.post(`cars/details/${this.carId}/like`, {}, this.userToken)
      .then(resp => {
        localStorage.setItem(this.carId, this.carId);
        this.liked = true;
        this.message = resp.message;
        this.getCar(this.carId);
      });
  }

  ngOnInit() {
    if (this.userToken !== null) {
      this.getCar(this.carId);
      this.getReviews(this.carId);
    } else {
      this.router.navigateByUrl('users/login');
    }
  }

  ngDoCheck () {
    if (localStorage.getItem(this.carId) !== null) {
      this.liked = true;
    }
  }

}
