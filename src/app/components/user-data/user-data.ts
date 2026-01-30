import { Component } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-user-data',
  imports: [],
  templateUrl: './user-data.html',
  styleUrl: './user-data.css',
})
export class UserData {
  currentUser: { email: string, nickname:string } | null = null;

   /**
   * Constructor del componente UserData.
   * 
   * @param userService Servicio que gestiona la autenticación y los datos del usuario.
   * Se utiliza para obtener el usuario actual y realizar logout.
   */
  constructor(private userService: User){
    this.currentUser=this.userService.getCurrentUser();
  }

  /**
 * Cierra la sesión del usuario actual
 * Llama al método logout del servicio userService para limpiar la sesión.
 * 
 * @returns {void}
 */
  logout():void{
  this.userService.logout();
  }

}
