import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(public uiService: UIService) { }

  ngOnInit(): void {
  }

  toggleLeftMenu() {
    this.uiService.isLeftMenuClose = !this.uiService.isLeftMenuClose;
  }

}
