import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';
import { User } from '../models/user';
import { AppConstant } from '../constants/app-constant';
import { UIService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router,
    private appService: AppServiceService,
    private uiService: UIService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    if (this.appService.currentUser) {
      return true;
    }
    let localUser: User = JSON.parse(localStorage.getItem(AppConstant.LOCAL_STORAGE_LOGIN_USER_KEY))
    if (!localUser) {
      this.router.navigateByUrl(AppConstant.LOGIN_URL);
    }
    this.appService.currentUser = localUser;
    this.uiService.userEmail = localUser.userEmail;
    return true;
  }

}
