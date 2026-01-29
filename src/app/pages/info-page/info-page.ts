import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-info-page',
  imports: [Header, RouterLink],
  templateUrl: './info-page.html',
  styleUrl: './info-page.css',
})
export class InfoPage {

}
