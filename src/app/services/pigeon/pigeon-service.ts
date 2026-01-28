import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PigeonService {
  pigeons: { id: number, name: string; age:number; description: string, label:string, img:string }[] = [];
  constructor(){
    this.pigeons=[ { id:1, name: 'Princesa', age: 2, description: 'Paloma tranquila', label:'Domesticado', img:'pigeons/pigeon01.webp' },
    { id:2, name: 'Alfonso', age: 1, description: 'Canta muy bonito', label:'sociable', img:'pigeons/pigeon02.jpg'},
    { id:3, name: 'Palomet', age: 3, description: 'Paloma amigable y colorida', label: 'entrenable', img:'pigeons/pigeon03.jpg' },];

  }

  getPigeons(){
    return this.pigeons;
  }
  
}

export interface Pigeon {
  id:number;
  name: string;
  age: number;
  description: string;
  label:string
  img:string
}
