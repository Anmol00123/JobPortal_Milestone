import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JobserviceService, User } from './jobservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  user:User=new User();
  constructor(private myService:JobserviceService,private router:Router){

  }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if (this.myService.isUserLoggedIn())
    return true;

  this.router.navigate(['login']);
  return false;

}
  }
