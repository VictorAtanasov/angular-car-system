import { Component} from '@angular/core';
import { RegisterModel } from './register.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent  {

  user: RegisterModel = new RegisterModel();

  constructor(private usersService: UsersService) { }

  register(){
    console.log(this.user)
  }

}
