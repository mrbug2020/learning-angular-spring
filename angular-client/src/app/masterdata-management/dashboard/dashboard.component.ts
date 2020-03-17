import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';
import { MenuItem } from 'src/app/models/menu-item';
import { AppConstant } from 'src/app/constants/app-constant';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedValue;

  constructor(private appService: AppServiceService,
    public uiService: UIService) {
    const menuItem: MenuItem = {
      key: 'DASHBOARD',
      label: 'Dashboard',
      path: AppConstant.DASHBOARD_URL,
      cssClass: 'lmenu_db'
    };
    this.uiService.lMenuItems = [menuItem];
  }

  ngOnInit(): void {

  }

  handlerSearchChange(event: any) {
  }

  showConfirmModel() {
    this.uiService.openConfirmModel().subscribe(confirm => console.log(confirm));
  }

}
