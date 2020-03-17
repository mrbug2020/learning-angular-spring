import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';
import { MenuItem } from '../models/menu-item';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppConstant } from '../constants/app-constant';
import { UIService } from '../services/ui.service';
import { ActivatedRoute } from '@angular/router';
import { Role } from '../models/role';

@Component({
  selector: 'app-masterdata-management',
  templateUrl: './masterdata-management.component.html',
  styleUrls: ['./masterdata-management.component.css']
})
export class MasterdataManagementComponent implements OnInit, AfterViewInit {

  isDashboard: boolean = false;
  constructor(public appService: AppServiceService,
    public uiService: UIService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(data => {
      this.uiService.initRole(data.roles);
    })
    this.uiService.initLMenuForUserGroupManag();
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
