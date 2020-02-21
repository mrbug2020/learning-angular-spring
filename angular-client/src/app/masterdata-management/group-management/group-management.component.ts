import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { AppConstant } from 'src/app/constants/app-constant';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.css']
})
export class GroupManagementComponent implements OnInit {

  constructor(public uiService: UIService) {
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
    this.uiService.lMenuItems = [userMenuItem, groupMenuItem];
  }

  ngOnInit(): void {
  }

}
