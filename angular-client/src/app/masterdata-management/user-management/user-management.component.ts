import { Component, OnInit } from '@angular/core';
import { LeftMenuService } from 'src/app/services/left-menu.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(public leftMenuService: LeftMenuService) {
  }

  ngOnInit(): void {

  }

}
