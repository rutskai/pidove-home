import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { PigeonCards } from "../../components/pigeon-cards/pigeon-cards";

@Component({
  selector: 'app-home-page',
  imports: [Header, PigeonCards],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
