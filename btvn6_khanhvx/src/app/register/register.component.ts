import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: any = null;
  password: any = null;
  age: any = null;
  date_of_birth: any = null;
  country: any = null;
  resultRegister = "";

  constructor(
    private userService: UserService
  ){}

  register(){
    const user = {
      username: this.username,
      password: this.password,
      age: this.age,
      date_of_birth: this.date_of_birth,
      country: this.country
    }
    this.userService.register(user).subscribe(res => {
      console.log(res);
      this.resultRegister = "Đăng ký thành công."
    })
  }
}
