import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { User } from 'src/app/models/user';
import { AppConstant } from 'src/app/constants/app-constant';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-users-reg',
  templateUrl: './users-reg.component.html',
  styleUrls: ['./users-reg.component.css']
})
export class UsersRegComponent implements OnInit {

  tmpUser: User;
  addingUsers: User[] = [];
  defaultTmpUser: User = {
    id: null,
    userEmail: '',
    password: '123456',
    role: this.uiService.deepClone(this.uiService.allRole[this.uiService.allRole.length - 1])
  }

  constructor(public uiService: UIService,
    private appService: AppServiceService) {
    this.tmpUser = this.uiService.deepClone(this.defaultTmpUser);
  }

  ngOnInit(): void {
  }

  addUser(addingUser: User) {
    if (!addingUser.userEmail) {
      return;
    }
    if (!AppConstant.EMAIL_REGEX.test(addingUser.userEmail)) {
      return;
    }
    this.addingUsers.push(this.uiService.deepClone(addingUser));
    this.tmpUser = this.uiService.deepClone(this.defaultTmpUser);
  }

  handlerTmpRoleChange(event: any, user: User) {
    console.log(event);
    console.log(user.role);
  }

  removeAddingUser(removeUser: User, removeIndex: number) {
    this.addingUsers.forEach((user, index) => {
      if (removeIndex === index) {
        this.addingUsers.splice(index, 1);
      }
    })
  }

  handlerSaveAllUser() {
    if (!this.addingUsers || this.addingUsers.length <= 0) {
      return;
    }
    this.appService.addUsers(this.addingUsers).subscribe(
      data => {
        console.log(data);
        this.addingUsers = [];
      },
      error => console.log(error.error || error));
  }

}
