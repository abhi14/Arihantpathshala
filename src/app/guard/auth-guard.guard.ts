import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckUserService } from '../services/check-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(public auth: CheckUserService, public router: Router) {}

  canActivate(): boolean {

    if (this.auth.chkUser()==null) {
      this.router.navigate(['loginpage']);
      return false;
    }
    return true;
  }
  
}
