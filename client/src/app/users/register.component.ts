import { Component} from '@angular/core';
import { RegisterModel } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent  {

  user: RegisterModel = new RegisterModel();

  constructor() { }

  register(){
    console.log(this.user)
  }

}
