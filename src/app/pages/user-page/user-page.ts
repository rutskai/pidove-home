import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { UserData } from "../../components/user-data/user-data";

@Component({
  selector: 'app-user-page',
  imports: [Header, UserData],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
})
export class UserPage {

}
