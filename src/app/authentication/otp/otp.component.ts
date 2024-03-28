import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [ BrowserModule, FormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent {
  value : any
}
