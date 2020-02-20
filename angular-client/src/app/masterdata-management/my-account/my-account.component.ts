import { Component, OnInit } from '@angular/core';
import { LeftMenuService } from 'src/app/services/left-menu.service';
import { MenuItem } from 'src/app/models/menu-item';
import { AppConstant } from 'src/app/constants/app-constant';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private leftMenuService: LeftMenuService) {
    const menuItem: MenuItem = {
      key: 'MYACCOUNT',
      label: 'My Account',
      path: AppConstant.MY_ACCCOUNT_URL,
      cssClass: 'lmenu_user'
    };
    this.leftMenuService.LMenuItems = [menuItem];
  }

  ngOnInit(): void {
  }

}
