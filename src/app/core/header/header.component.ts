import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public userService: UserService) { }

  get isLogged(): boolean {
    return this.userService.isLogged; //polzwame direktno promenliwata wmesto userService w html-a
  }


  logoutHandler(): void {
    this.userService.logout();
  }
}