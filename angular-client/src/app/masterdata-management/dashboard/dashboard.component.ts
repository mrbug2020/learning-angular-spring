import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';
import { LeftMenuService } from 'src/app/services/left-menu.service';
import { MenuItem } from 'src/app/models/menu-item';
import { AppConstant } from 'src/app/constants/app-constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private appService: AppServiceService,
    public leftMenuService: LeftMenuService) {
    const menuItem: MenuItem = {
      key: 'DASHBOARD',
      label: 'Dashboard',
      path: AppConstant.DASHBOARD_URL,
      cssClass: 'lmenu_db'
    };
    this.leftMenuService.LMenuItems = [menuItem];
  }

  ngOnInit(): void {

  }

}
