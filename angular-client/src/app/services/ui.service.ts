import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { AppConstant } from '../constants/app-constant';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  isLeftMenuClose: boolean = false;
  lMenuItems: Array<MenuItem> = [];
  constructor() { }

  initLMenuForUserGroupManag() {
    const userMenuItem: MenuItem = {
      key: 'UserManagement',
      label: 'User Management',
      path: AppConstant.USER_MANAGEMENT_URL,
      cssClass: 'lmenu_table'
    };
    const groupMenuItem: MenuItem = {
      key: 'GroupManagement',
      label: 'Group Management',
      path: AppConstant.GROUP_MANAGEMENT_URL,
      cssClass: 'lmenu_group'
    };
    this.lMenuItems = [userMenuItem, groupMenuItem];
  }
}
