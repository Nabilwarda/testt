import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule]
})
export class RegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordError: boolean = false;

  onSignUp(form: NgForm) {
    this.passwordError = false; // Reset the error flag

    if (this.password !== this.confirmPassword) {
      this.passwordError = true; // Set the error flag if passwords don't match
      console.log('Passwords do not match.');
      return; // Prevent form submission
    }

    if (form.valid && !this.passwordError) {
      console.log('Registration form is valid');
      console.log('Email:', this.email, 'Password:', this.password, 'Username:', this.username);
      // Place your registration logic here
    } else {
      console.log('Registration form is not valid');
    }
  }
}
