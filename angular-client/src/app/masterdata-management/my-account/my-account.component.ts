import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { AppConstant } from 'src/app/constants/app-constant';
import { UIService } from 'src/app/services/ui.service';
import { AppServiceService } from 'src/app/services/app-service.service';
import { error } from 'protractor';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  $test: any;
  showChangePasswordForm: boolean;
  showChangeUserEmailForm: boolean;


  constructor(public uiService: UIService,
    private appService: AppServiceService) {
    const menuItem: MenuItem = {
      key: 'MYACCOUNT',
      label: 'My Account',
      path: AppConstant.MY_ACCCOUNT_URL,
      cssClass: 'lmenu_user'
    };
    this.uiService.lMenuItems = [menuItem];
  }

  ngOnInit(): void {
  }

  handlerChangeUserEmail(changeUserEmail: any) {
    if (!changeUserEmail || changeUserEmail == this.uiService.userEmail) {
      return;
    }
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!regexp.test(changeUserEmail)) {
      return;
    }
    this.appService.changeUserEmail(changeUserEmail).subscribe(
      data => {
        let updatedUser: User = data;
        this.appService.currentUser = updatedUser;
        this.uiService.userEmail = updatedUser.userEmail;
        if (JSON.parse(localStorage.getItem(AppConstant.LOCAL_STORAGE_LOGIN_USER_KEY))) {
          localStorage.setItem(AppConstant.LOCAL_STORAGE_LOGIN_USER_KEY, JSON.stringify(updatedUser));
        }
        this.toggleChangeUserEmail();
      },
      error => console.log(error)
    );
  }

  toggleChangeUserEmail() {
    this.showChangeUserEmailForm = !this.showChangeUserEmailForm;
  }

  toggleChangePasswordForm() {
    this.showChangePasswordForm = !this.showChangePasswordForm;
  }

  getDisplayStyle() {
    return this.showChangePasswordForm ? 'block' : 'none';
  }

}
