import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { User } from '../../services/user';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  currentUser: { email: string, nickname:string } | null = null;

  /**
   * Constructor del componente
   * Utiliza el servicio User y obtiene los datos del usuario actual,
   * de esta forma en el header podemos utilizar la variable nickname
   * 
   * @param {User} userService - Servicio para gestionar usuarios
   */
  constructor(private userService: User){
    this.currentUser = this.userService.getCurrentUser();

  }

}
