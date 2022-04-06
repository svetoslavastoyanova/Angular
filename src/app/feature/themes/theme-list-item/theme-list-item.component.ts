import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';
import { ITheme } from '../../../core/interfaces';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css']
})
export class ThemeListItemComponent implements OnChanges {

  isLoggedIn: boolean = this.userService.isLogged;
  canSubscribe: boolean = false; // w slychai che sme se subscribnali weche, da ne mojem pak

  @Input() theme: ITheme;

  constructor(private userService: UserService) { }

  ngOnChanges(): void {
    console.log('subs', this.theme.subscribers.includes('5fa64b162183ce1728ff371d'));
    this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
  }

}
