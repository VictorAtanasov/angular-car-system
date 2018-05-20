import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from './register.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent  {

  user: RegisterModel = new RegisterModel();
  message;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  register() {
    this.usersService.register(this.user)
      .then(resp => {
        console.log(resp);
        if (resp.success) {
          this.router.navigateByUrl('users/login');
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
