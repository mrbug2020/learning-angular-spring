import { Component, OnInit } from '@angular/core';
import { LeftMenuService } from 'src/app/services/left-menu.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private leftMenuService: LeftMenuService) {
    this.leftMenuService.isDashboard = false;
   }

  ngOnInit(): void {
  }

}
