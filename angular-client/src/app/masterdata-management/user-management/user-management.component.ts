import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { User } from 'src/app/models/user';
import { AppServiceService } from 'src/app/services/app-service.service';
import { AppConstant } from 'src/app/constants/app-constant';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  allUsers: User[] = [];
  filterUser: User[] = [];
  currentSearchEmail: string;

  constructor(public uiService: UIService,
    private appService: AppServiceService) {
    this.uiService.initLMenuForUserGroupManag();
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  private getAllUser() {
    this.appService.getAllUser().subscribe(data => {
      this.allUsers = data;
      this.filterUser = data;
    });
  }

  handlerSearchChange(userEmailSearch: string) {
    this.currentSearchEmail = userEmailSearch;
    this.searchByEmail(userEmailSearch);
  }

  private searchByEmail(userEmailSearch: string) {
    if (!userEmailSearch || userEmailSearch == '') {
      this.getAllUser();
    }
    else {
      this.appService.searchUserByEmail(userEmailSearch).subscribe(data => {
        this.filterUser = data;
      });
    }
  }

  trackByUserId(index: any, item: User) {
    if (!item) {
      return null;
    }
    return item;
  }

  handlerRoleChange(event: any, changeUser: User, index: any) {
    // console.log(`${event.value} - ${index} - ${changeUser.userEmail}`);
    // console.log(changeUser.role.id);
    this.uiService.openConfirmModel('Are you sure?', `Do you want to change User['${changeUser.userEmail}'] to Role['${event.label}']`).subscribe(
      isConfirm => {
        if (isConfirm) {
          changeUser.role.id = event.value;
          this.appService.editUser(changeUser).subscribe(data => this.searchByEmail(this.currentSearchEmail));
        } else {
          this.searchByEmail(this.currentSearchEmail);
        }
      }
    );
  }

  handlerEmailChange(user: User, newEmail: string) {
    // console.log(`Old Email :'${user.userEmail}' -> new Email ${newEmail}`);
    if (!newEmail || user.userEmail == newEmail || !AppConstant.EMAIL_REGEX.test(newEmail)) {
      return;
    }
    user.userEmail = newEmail;
    this.appService.editUser(user).subscribe(data => console.log(data));
  }

}
