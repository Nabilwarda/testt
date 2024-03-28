import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  }
];
