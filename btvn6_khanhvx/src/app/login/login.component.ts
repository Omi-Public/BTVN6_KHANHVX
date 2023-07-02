import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any = null;
  password: any = null;
  resultLogin = "";

  constructor(
    private userService: UserService
  ){}

  ngOnInit() {
  }

  login(){
    this.userService.login(this.username, this.password).subscribe(result => {
      this.resultLogin = result.result;
    })
  }
}
