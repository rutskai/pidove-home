import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { PigeonService } from '../../services/pigeon/pigeon-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-page',
  imports: [Header, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  pigeonAdopted:number;
  pigeonAvailable:number;
  constructor(private pigeonService: PigeonService){
    this.pigeonAdopted=this.pigeonService.pigeonAdopted;
    this.pigeonAvailable=this.pigeonService.getPigeons().length;
  }

}
