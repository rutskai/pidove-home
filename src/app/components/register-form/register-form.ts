import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../services/user';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})

export class RegisterForm {
  registerForm: FormGroup;

  constructor(private userService: User) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nickname: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repeatPassword: new FormControl('', Validators.required)
    }, {validators: this.validatePassword});
  }

  validatePassword(control: any){
 const { password, repeatPassword } = control.value;
    
    if (password !== repeatPassword) {
      return {noMatch:true}
    } 
    return null;
  }

  handleAccount() {
    const { email,nickname, password} = this.registerForm.value;

    if (this.registerForm.invalid) {
      return;
    }

   this.userService.addAccount(email, nickname, password);
    console.log('Cuenta creada:', { email, nickname, password });
    this.registerForm.reset();
  }
}
