import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, RouterLink,NgIf]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin(form: NgForm) {
    if (form.valid) {
      console.log('Login form is valid');
      console.log('Email:', this.email, 'Password:', this.password);

    } else {
      console.log('Login form is not valid');

    }
  }
}
