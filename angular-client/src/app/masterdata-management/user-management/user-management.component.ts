import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(public uiService: UIService) {
    this.uiService.initLMenuForUserGroupManag();
  }

  ngOnInit(): void {

  }

  handlerSearchChange(event: any) {
    console.log(event)
  }

}
