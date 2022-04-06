import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){} // toi shte e zawisim na user service-a zashtoto
  //prez nego shte prowerim dali sme lognati. a router polzwame za nawigiraneto
  
  canActivate(): boolean | UrlTree { // wrushta ili boolean ili URL tree
    if (this.userService.isLogged) {
      return true;  // ako user e lognat
    }
    return this.router.createUrlTree(['/login']) // ako ne me redirectni kum login
  }
  
}
