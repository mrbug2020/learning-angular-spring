import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordCompleteComponent } from './forgot-password/forgot-password-complete/forgot-password-complete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterdataManagementComponent } from './masterdata-management/masterdata-management.component';
import { LeftMenuComponent } from './masterdata-management/left-menu/left-menu.component';
import { DashboardComponent } from './masterdata-management/dashboard/dashboard.component';
import { MyAccountComponent } from './masterdata-management/my-account/my-account.component';
import { UserManagementComponent } from './masterdata-management/user-management/user-management.component';
import { HeaderComponent } from './masterdata-management/header/header.component';
import { AppServiceService } from './services/app-service.service';
import { AppConstant } from './constants/app-constant';
import { GroupManagementComponent } from './masterdata-management/group-management/group-management.component';
import { GroupDetailsComponent } from './masterdata-management/group-management/group-details/group-details.component';
import { GroupAddMemberComponent } from './masterdata-management/group-management/group-add-member/group-add-member.component';
import { GroupNewComponent } from './masterdata-management/group-management/group-new/group-new.component';
import { UsersRegComponent } from './masterdata-management/user-management/users-reg/users-reg.component';
import { UIService } from './services/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    ForgotPasswordCompleteComponent,
    MasterdataManagementComponent,
    HeaderComponent,
    LeftMenuComponent,
    DashboardComponent,
    MyAccountComponent,
    UserManagementComponent,
    GroupManagementComponent,
    GroupDetailsComponent,
    GroupAddMemberComponent,
    GroupNewComponent,
    UsersRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppServiceService,
    AppConstant,
    UIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
