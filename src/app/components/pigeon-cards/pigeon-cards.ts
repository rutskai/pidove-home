import { Component } from '@angular/core';
import { Pigeon, PigeonService } from '../../services/pigeon/pigeon-service';

@Component({
  selector: 'app-pigeon-cards',
  imports: [],
  templateUrl: './pigeon-cards.html',
  styleUrl: './pigeon-cards.css',
})
export class PigeonCards {
   pigeons: Pigeon[];

  /**
   * Constructor del componente
   * Utiliza el servicio PigeonService y carga las palomas disponibles
   * 
   * @param {PigeonService} pigeonService - Servicio para gestionar palomas
   */
  constructor(private pigeonService: PigeonService){
     this.pigeons = this.pigeonService.getPigeons();
  }

  /**
   * Elimina una paloma del catálogo y actualiza la vista.
   * 
   * Llama al servicio para eliminar la paloma por su ID, Recarga el listado de palomas 
   * desde el servicio y actualiza la el array de objetos pigeons para que la vista se refresque
   * 
   * @param {number} id - El ID de la paloma a eliminar
   * @returns {void}
   */

  deletePigeon(id:number):void{
    this.pigeonService.removePigeon(id);
    this.pigeons = this.pigeonService.getPigeons();
  }

}
