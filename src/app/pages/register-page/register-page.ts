import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { RegisterForm } from "../../components/register-form/register-form";

@Component({
  selector: 'app-register-page',
  imports: [Header, RegisterForm],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

}
