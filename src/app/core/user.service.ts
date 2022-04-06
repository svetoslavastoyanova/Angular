import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from './interfaces';
import { StorageService } from './storage.service';

export interface CreateUserDto { username: string, email: string, password: string, tel?: string }

@Injectable()
export class UserService {

  //isLogged = false;
  currentUser: IUser;
  get isLogged() { // lognati sme samo togawa kogato imame this.current user
    return !!this.currentUser;
  }


  constructor(
    private storage: StorageService,
    private httpClient: HttpClient) {
    //this.isLogged = this.storage.getItem('isLogged');
  }

  //login(): void {
    //this.isLogged = true;
    //this.storage.setItem('isLogged', true);
  //}
  
  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}/login`, userData, { withCredentials: true, observe: 'response' })
      .pipe(
        tap(response => console.log(response)), 
        map(response => response.body),
        tap(user => this.currentUser = user) //kogato go polycha da mi se setne na this.current user. s tab prosto podslyshwame
      )
  }

  getProfile$(): Observable<IUser> { // metod koi shte wurne observale ot user
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true }) // naprawi http zaqwka iw zemi profila
      .pipe(tap(user => this.currentUser = user))
  }

  logout(): void {
    //this.isLogged = false;
    //this.storage.setItem('isLogged', false);
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData, { withCredentials: true })
    // generirai mu post zaqwka, koqto shte mi wurne IUser, prati zaqwkata na sledniq url i iskam da otida na register s userdDatata
  }
}
