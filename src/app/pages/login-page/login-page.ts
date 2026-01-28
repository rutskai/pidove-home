import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { LoginForm } from "../../components/login-form/login-form";

@Component({
  selector: 'app-login-page',
  imports: [Header, LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

}
