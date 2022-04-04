import { Component, OnInit, Input } from '@angular/core';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.css']
})
export class ThemeListItemComponent implements OnInit {

  @Input() theme!: ITheme; // imame theme ot tip ITheme
  constructor() { }

  ngOnInit(): void {
  }

}
