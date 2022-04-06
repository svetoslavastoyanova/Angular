import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/theme.service';
import { ITheme } from '../../../core/interfaces';


@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit, AfterViewInit {

  themeList: ITheme[];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadThemeList().subscribe(themeList => {
      this.themeList = themeList;
    });
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }

}
