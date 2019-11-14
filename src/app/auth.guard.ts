import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { UserServicesService } from './services/user.service'

@Injectable(

)
export class AuthGuard implements CanActivate {

  constructor(private _userService: UserServicesService, private _router: Router) {

  }

  canActivate(): boolean {
    if (this._userService.isLoggedIn) {
      return true;
    }
    else {
      
      this._router.navigate(['/home']);
      return false;
    }
  }

}
