import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PigeonService {
  pigeonAdopted:number;
  pigeons: { id: number, name: string; age:number; description: string, label:string, style: string, img:string }[] = [];

  /**
   * Constructor del servicio
   * Inicializa la variable que cuenta las palomas adoptadas en 0
   * Carga el array de palomas con datos iniciales predeterminados
   */
  constructor(){
    this.pigeonAdopted=0;
    this.pigeons=[ { id:1, name: 'Princesa', age: 2, description: 'Paloma tranquila', label:'domesticado',style:'bg-success', img:'pigeons/pigeon01.webp' },
    { id:2, name: 'Alfonso', age: 1, description: 'Canta muy bonito', label:'sociable',style:'bg-info', img:'pigeons/pigeon02.jpg'},
    { id:3, name: 'Palomet', age: 3, description: 'Paloma amigable y colorida', label: 'entrenable',style:'bg-warning', img:'pigeons/pigeon03.jpg' },
    {id:4, name: 'Skibidis', age: 3, description: 'Paloma divertida y habladora', label: 'sociable',style:'bg-info', img:'pigeons/pigeon04.jpg'}];

  }

  /**
   * Obtiene el listado completo de palomas disponibles para adoptar.
   * 
   * @returns {Array<Pigeon>} Array con todas las palomas disponibles
   * 
   */
  getPigeons(){
    return this.pigeons;
  }

   /**
   * Elimina una paloma del catálogo y la marca como adoptada
   * Incrementa la variable que cuenta las palomas adoptadas
   * 
   * @param {number} id - El identificador único de la paloma a eliminar/adoptar
   * @returns {void}
   */

  removePigeon(id:number){
   this.pigeons=[...this.pigeons.filter(p=> p.id!==id)];
   console.log("Pigeon n" + id + " eliminada.");
   this.pigeonAdopted=this.pigeonAdopted+1;
  }
  
}

/**
 * Interfaz que define la estructura de una paloma
 * Establece los tipos de datos para cada propiedad de una paloma
 * 
 * @interface Pigeon
 */

export interface Pigeon {
  id:number
  name: string
  age: number
  description: string
  label:string
  style:string
  img:string
}
