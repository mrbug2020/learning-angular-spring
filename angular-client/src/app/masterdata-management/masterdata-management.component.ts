import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';
import { LeftMenuService } from '../services/left-menu.service';
import { MenuItem } from '../models/menu-item';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-masterdata-management',
  templateUrl: './masterdata-management.component.html',
  styleUrls: ['./masterdata-management.component.css']
})
export class MasterdataManagementComponent implements OnInit, AfterViewInit {

  isDashboard: boolean = false;
  constructor(public appService: AppServiceService,
    public leftMenuService: LeftMenuService) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  onRouterActive(routeComponentActive: any) {
    if (routeComponentActive instanceof DashboardComponent) {
      this.isDashboard = true;
    } else {
      this.isDashboard = false;
    }
  }
}
