import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule,ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;

  private validEmail = 'user@demo.com';
  private validPassword = '123456';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    console.log('Formulario enviado:', this.loginForm.value);
    const { email, password } = this.loginForm.value;
    
    if (email === 'user@demo.com' && password === '123456') {
      console.log('Credenciales correctas. Redirigiendo...');
      this.loginError = false;
      localStorage.setItem('userToken', 'demoToken');
      this.router.navigate(['/product-list']);
    } else {
      console.log('Credenciales incorrectas.');
      this.loginError = true;
    }
  }
  
}
