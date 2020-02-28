import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';
import { AppConstant } from 'src/app/constants/app-constant';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHeaderMenuClose: boolean = true;
  userEmail: string;
  constructor(private router: Router,
    private appService: AppServiceService,
    public uiService: UIService) {
  }

  ngOnInit(): void {
  }

  toggleHeaderMenu() {
    this.isHeaderMenuClose = !this.isHeaderMenuClose;
  }
  handlerLogout() {
    localStorage.removeItem(AppConstant.LOCAL_STORAGE_LOGIN_USER_KEY);
    localStorage.clear();
    this.router.navigate(["/"]);
  }

}
