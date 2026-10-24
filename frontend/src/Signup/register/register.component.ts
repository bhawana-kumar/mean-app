import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null,
    phone: null,
    role: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    const { username, email, password ,phone, role} = this.form;

    this.authService.register(username, email, password, phone, role).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
 
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

