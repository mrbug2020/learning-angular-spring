import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppServiceService } from 'src/app/services/app-service.service';
import { LeftMenuService } from 'src/app/services/left-menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private appService: AppServiceService,
    public leftMenuService: LeftMenuService) {
      this.leftMenuService.isDashboard = true;
     }
  
  ngOnInit(): void {
    
  }

}
