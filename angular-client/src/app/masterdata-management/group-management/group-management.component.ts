import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.css']
})
export class GroupManagementComponent implements OnInit {

  constructor(public uiService: UIService) {
    this.uiService.initLMenuForUserGroupManag();
  }

  ngOnInit(): void {
  }

}
