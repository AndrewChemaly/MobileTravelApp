import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
