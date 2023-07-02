import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(){ }

  title = 'Bài tập buổi 6';
  loginOn: boolean = false;
  registerOn: boolean = false;
  dashboardOn: boolean = false;

  goToLoginPage(){
    this.resetPageOn();
    this.loginOn = true;
  }

  goToRegisterPage(){
    this.resetPageOn();
    this.registerOn = true;
  }

  goToDashboardPage(){
    this.resetPageOn();
    this.dashboardOn = true;
  }
  
  resetPageOn(){
    this.loginOn = false;
    this.registerOn = false;
    this.dashboardOn = false;
  }
}
