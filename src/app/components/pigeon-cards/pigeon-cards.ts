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
  constructor(private pigeonService: PigeonService){
     this.pigeons = this.pigeonService.getPigeons();
  }

}
