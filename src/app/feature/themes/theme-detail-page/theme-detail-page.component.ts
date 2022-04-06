import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, ITheme } from 'src/app/core/interfaces';
import { ThemeService } from 'src/app/core/theme.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-theme-detail-page',
  templateUrl: './theme-detail-page.component.html',
  styleUrls: ['./theme-detail-page.component.css']
})
export class ThemeDetailPageComponent implements OnInit {
  theme: ITheme<IPost>; // temata shte bude ot Itheme
  canSubscribe: boolean = false;
  isLoggedIn: boolean = this.userService.isLogged;
  

  constructor(
    private activatedRoute: ActivatedRoute, // extract-wame idto
    private themeService: ThemeService, // wzimame postowete
    private userService: UserService // wzimame dali user e lognat ili ne
    ) { }

  ngOnInit(): void {
    const themeId = this.activatedRoute.snapshot.params['themeId']//wzimame id-to
    this.themeService.loadThemeById(themeId).subscribe(theme => {
      this.theme = theme; // shte zaredq tochno tazi tema sinhronno, podawaiki themeId,
      //koeto wzimam ot nashiq ryter gore; subscrib-vam se za towa kogato requesta e zawurshil
      // toi shte prati nashiq theme po mrejata i az shte kaja che shte go asign-a na moqta promenliwa theme
      this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d'); // dali tazi tema ne sudurja subscriber-ite my, dalie weche
      // ne se e subscribnal
    });
  }

  canLike(comment: IPost){
    return !comment.likes.includes('5fa64b162183ce1728ff371d'); // ako potrebitelqt ne e haresal komentara
  }



}
