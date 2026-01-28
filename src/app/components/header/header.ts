import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { User } from '../../services/user';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  currentUser: { email: string, nickname:string } | null = null;

  constructor(private userService: User){
    this.currentUser = this.userService.getCurrentUser();

  }

}
