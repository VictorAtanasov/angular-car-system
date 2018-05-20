import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars = 0;
  users = 0;

  constructor(
    private httpService: HttpService
  ) { }

  stats () {
    this.httpService.get('stats')
      .then(resp => {
        this.cars = resp.cars;
        this.users = resp.users;
      });
  }

  ngOnInit () {
    this.stats();
  }

}
