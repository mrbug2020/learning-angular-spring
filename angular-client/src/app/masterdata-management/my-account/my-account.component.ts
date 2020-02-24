import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { AppConstant } from 'src/app/constants/app-constant';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  $test: any;
  showChangePasswordForm: boolean;
  showChangeUserIDForm: boolean;


  constructor(public uiService: UIService) {
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

  toggleChangeUserID() {
    this.showChangeUserIDForm = !this.showChangeUserIDForm;
  }

  toggleChangePasswordForm() {
    this.showChangePasswordForm = !this.showChangePasswordForm;
  }

  getDisplayStyle() {
    return this.showChangePasswordForm ? 'block' : 'none';
  }

}
