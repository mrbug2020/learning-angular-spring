import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from '../constants/app-constant';
import { User } from '../models/user';
import { AppServiceService } from '../services/app-service.service';
import { UIService } from '../services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  isRemember: Boolean = true;
  isLoginError: boolean;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppServiceService,
    public uiService: UIService) {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const localStorageUser: User = JSON.parse(localStorage.getItem(AppConstant.LOCAL_STORAGE_LOGIN_USER_KEY));
    if (localStorageUser) {
      this.doLogin(localStorageUser);
    }
  }

  onSubmit(formData: any) {
    let user: User = { id: null, userEmail: formData.userEmail, password: formData.password, role: undefined };
    this.doLogin(user);
  }

  private doLogin(user: User) {
    this.appService.checkLogin(user).subscribe(loginUser => {
      if (loginUser) {
        if (this.isRemember) {
          localStorage.setItem(AppConstant.LOCAL_STORAGE_LOGIN_USER_KEY, JSON.stringify(loginUser));
        }
        this.uiService.userEmail = loginUser.userEmail;
        this.appService.currentUser = loginUser;
        console.log(loginUser);
        this.router.navigate([AppConstant.MASTER_MANAGEMENT_URL]);
      }
      else {
        this.isLoginError = true;
      }
    }, errorResponse => {
      console.log(errorResponse);
      this.isLoginError = true;
    });
  }
}
