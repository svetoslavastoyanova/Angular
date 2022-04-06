import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-theme-new-page',
  templateUrl: './theme-new-page.component.html',
  styleUrls: ['./theme-new-page.component.css']
})
export class ThemeNewPageComponent implements OnInit {

  constructor(
    private router: Router, 
    private themeService: ThemeService // za da wzemem back end-a
    ) { }

  ngOnInit(): void {
  }

  submitNewTheme(newThemeForm: NgForm):void{
    console.log(newThemeForm.value);
    this.themeService.addTheme$(newThemeForm.value).subscribe({ // dobawi mi temata, kato podai na tazi newThemeForm value-to i se subscribni
      next: (theme) => { //kogato mi wurnesh tazi stoinost(tema), logni mi q da q widq
        console.log(theme);
        this.router.navigate(['/themes']);
      },
      error: (error) => { //ako se slychi greshka, pokaji mi q
        console.error(error);
      }
    })
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
