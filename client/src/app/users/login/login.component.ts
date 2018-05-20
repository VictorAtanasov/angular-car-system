import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './login.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user: LoginModel = new LoginModel();
  message;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  login () {
    this.usersService.login(this.user)
      .then(resp => {
        if (resp.success) {
          localStorage.setItem('token', resp.token);
          localStorage.setItem('user', resp.user.name);
          this.router.navigateByUrl('');
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
