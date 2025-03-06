import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registrationForm: FormGroup;
  passwordStrengthClass = '';

  constructor(private fb: FormBuilder,private authService: AuthService) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value 
      ? null 
      : { mismatch: true };
  }

  checkPasswordStrength() {
    const password = this.registrationForm.get('password')?.value;
    if (!password) {
      this.passwordStrengthClass = 'w-0';
      return;
    }

    if (password.length < 6) {
      this.passwordStrengthClass = 'w-1/4 bg-red-500';
    } else if (password.length < 10) {
      this.passwordStrengthClass = 'w-1/2 bg-yellow-500';
    } else {
      this.passwordStrengthClass = 'w-full bg-green-500';
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const userData = {
        name: this.registrationForm.get('fullName')?.value,
        email: this.registrationForm.get('email')?.value,
        password: this.registrationForm.get('password')?.value,
        role: this.registrationForm.get('role')?.value,
        confirmPassword: this.registrationForm.get('confirmPassword')?.value
      };
      console.log(userData)

      this.authService.register(userData).subscribe(
        (response) => {
          console.log('Registration successful', response);
          // You can handle the response here, maybe navigate to a new page or show a message
        },
        (error) => {
          console.error('Error during registration', error);
          // You can handle the error here, like showing a message to the user
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

}
