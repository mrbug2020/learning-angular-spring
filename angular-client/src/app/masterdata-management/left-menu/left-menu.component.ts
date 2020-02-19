import { Component, OnInit } from '@angular/core';
import { LeftMenuService } from 'src/app/services/left-menu.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(public leftMenuService: LeftMenuService) { }

  ngOnInit(): void {
  }

  toggleLeftMenu(){
    this.leftMenuService.isLeftMenuClose = !this.leftMenuService.isLeftMenuClose;
  }

}
