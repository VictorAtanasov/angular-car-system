import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements DoCheck {

  isUser;

  getUser () {
    const user = localStorage.getItem('user');
    if ( user !== null) {
      this.isUser = false;
    } else {
      this.isUser = true;
    }
  }

  logOut () {
    localStorage.clear();
    this.isUser = false;
  }

  ngDoCheck () {
    this.getUser();
  }

}
