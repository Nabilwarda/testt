import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthNavbarComponent } from './authentication/auth-navbar/auth-navbar.component';
import { LoginComponent } from "./authentication/login/login.component";
import { RegistrationComponent } from './authentication/registration/registration.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AuthNavbarComponent, LoginComponent ,RegistrationComponent ,ResetPasswordComponent,ForgetPasswordComponent]
})
export class AppComponent {
  title = 'Almadani.Client';
}
