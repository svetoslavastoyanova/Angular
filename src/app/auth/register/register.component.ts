import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto, UserService } from 'src/app/core/user.service';
import { emailValidator, passwordMatch } from '../utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl(null, [Validators.required, Validators.minLength(5)]), //prawim si kontrolki
    'email': new FormControl(null, [Validators.required, emailValidator]),
    'passwords': new FormGroup({ //prawim podgrypa za dwete paroli
      'password': this.passwordControl,
      'rePassword': new FormControl(null, [passwordMatch(this.passwordControl)]),
    }),
    'tel': new FormControl(''),
    'telRegion': new FormControl('')
  })

  constructor(private formBuilder: FormBuilder, // wikame go za da si suzdadem form grypa
     private userService: UserService, // zaqwka kum backend-a
      private router: Router) { }

  ngOnInit(): void {
  }

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.registerFormGroup) { // za tazi password grypata dali mogat da s epokajat
    //greshkite
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid
  }

  handleRegister(): void {
    const { username, email, passwords, tel, telRegion } = this.registerFormGroup.value; // destruktwam

    const body: CreateUserDto = {
      username: username,
      email: email,
      password: passwords.password,
      // ...(tel && { tel: telRegion + tel})
    }

    if (tel) {
      body.tel = telRegion + tel;
    }

    this.userService.register$(body).subscribe(() => { // subscribe-wame se za tozi call
      this.router.navigate(['/home']);
    })
  }
}