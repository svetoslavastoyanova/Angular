import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage!: string;

  form = {
    email: {
      touched: false,
      value: ''
    },
    password: {
      touched: false,
      value: ''
    }
  };

  get showEmailError(): boolean {
    return this.form.email.touched && this.form.email.value.length === 0;
  }

  get showPasswordError(): boolean {
    return this.form.password.touched && this.form.password.value.length === 0;
  }

  get hasFormErrors(): boolean {
    return this.form.email.value.length === 0 || this.form.password.value.length === 0;
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  updateInputValue(name: 'email' | 'password', value: string): void {
    this.form[name].touched = true;
    this.form[name].value = value;
  }

  submitFormHandler(): void {
    const { email: { value: email }, password: { value: password } } = this.form;
    this.errorMessage = '';
    this.userService.login({ email, password }).subscribe({
      next: (data) => { //next e kogato imame neshto nowo w strema-a iskame towa da se slychi, a w data polychawame dannite koito sa email i password
        this.router.navigate(['/']);
      },
      error: (err) => { // kogato imame error, towa da se slychi
        this.errorMessage = 'ERROR!';
      }
    });
  }

}
