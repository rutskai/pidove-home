import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { PigeonCards } from "../../components/pigeon-cards/pigeon-cards";

@Component({
  selector: 'app-adopt-page',
  imports: [Header, PigeonCards],
  templateUrl: './adopt-page.html',
  styleUrl: './adopt-page.css',
})
export class AdoptPage {

}
