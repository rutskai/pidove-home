import { Component } from '@angular/core';
import { User } from '../../services/user';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginForm: FormGroup;
  loginError: boolean;

  constructor(private userService: User, private router: Router) {
    this.loginError=false;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

  }

  handleLogin() {

      if (this.loginForm.invalid) { 
      return;
    }

    const { email, password } = this.loginForm.value;
    
      if (this.userService.accounts.length === 0) {
      this.loginError = true;
      console.log('No hay usuarios registrados');
      return;
    }

    if (this.userService.validateLogin(email, password)) {
       this.loginError = false;
       this.router.navigate(['/home']);
       this.loginForm.reset();
      console.log('Login correcto');
    } else {
       this.loginError = true;
      console.log('Usuario o contraseña incorrecta');
    }
  }

}
