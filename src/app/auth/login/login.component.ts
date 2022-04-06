import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { emailValidator } from '../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, emailValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private userService: UserService, 
    private router: Router, // za da moje da go polzwame doly w handlera injektirame go
    private formBuilder: FormBuilder,) { } 

  ngOnInit(): void {
  }

  loginHandler(): void {
    //this.userService.login(); // shte se izwika naprimer pri butona login w htl-a
    //this.router.navigate(['/home']);
    
  }

  handleLogin(){
    //this.errorMessage = '';
    this.userService.login$(this.loginFormGroup.value).subscribe(() =>{
      this.router.navigate(['/home'])
    })
      
  }
}

