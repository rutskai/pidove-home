import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  accounts: string[];
  registerForm: FormGroup;
  isRepeat:boolean;
  isBlank:boolean;

  constructor() {
    this.accounts = [];
    this.isRepeat=true;
    this.isBlank=false;

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repeatPassword: new FormControl('', Validators.required)
    });
  }

  handleAccount() {
     const { email, password, repeatPassword } = this.registerForm.value;
    
     if (this.registerForm.invalid) {
      return;
    }

    if(password==''){
this.isBlank=true;
    }

    if(password!== repeatPassword){
      this.isRepeat=false;
    }

    }




}
