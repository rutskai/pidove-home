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
  /**
   * Formulario reactivo para el registro de usuarios
   * Contiene los campos: email, nickname, password y repeatPassword
   * @type {FormGroup}
   */
  registerForm: FormGroup;

  /**
   * Constructor del componente
   * Inicializa el formulario con sus campos y validadores
   * Crea el FormGroup con los campos correspondientes y aplica validaciones 
   * obligatorias, de mínimo de longitud, de email y una propia que compara que las
   * dos contraseñas coincidan.
   * 
   * @param {User} userService - Servicio para gestionar usuarios
   */
  constructor(private userService: User) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nickname: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repeatPassword: new FormControl('', Validators.required)
    }, {validators: this.validatePassword});
  }

   /**
   * Validador personalizado a nivel de formulario
   * Comprueba que el campo password y repeatPassword sean idénticos.
   * 
   * @param {any} control - El FormGroup a validar
   * @returns {Object|null} Retorna {noMatch: true} si las contraseñas no coinciden,
   *                        null si la validación es correcta
   */

  validatePassword(control: any){
 const { password, repeatPassword } = control.value;
    
    if (password !== repeatPassword) {
      return {noMatch:true}
    } 
    return null;
  }

   /**
   * Maneja la creación de una nueva cuenta de usuario y reinicia el formulario.
   * Valida el formulario y, si es correcto, crea la cuenta en el servidor
   * 
   * @returns {void}
   */
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
