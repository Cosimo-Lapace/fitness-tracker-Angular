import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private AuthService:AuthService) {}

  ngOnInit() {
  }

  onSubmit(form:NgForm) {

      this.AuthService.login({
        email: form.value.email,
        password:form.value.password,
      })

  }
}
