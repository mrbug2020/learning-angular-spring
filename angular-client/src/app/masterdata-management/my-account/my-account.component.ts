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

  constructor(private uiService: UIService) {
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

  changeUserID() {
    console.log(`Change UserID click at ${new Date().toLocaleDateString()}`);
    this.uiService.openConfirmModel('Change UserID', 'Do you want to change?', 'Cancel', 'Ok').subscribe(confirm => {
      console.log(confirm);
    });
  }

  toggleChangePasswordForm() {
    this.showChangePasswordForm = !this.showChangePasswordForm;
  }

  getDisplayStyle() {
    return this.showChangePasswordForm ? 'block' : 'none';
  }

}
