import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;


  constructor() { }

  ngOnInit() {
  }

}
