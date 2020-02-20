import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordCompleteComponent } from './forgot-password/forgot-password-complete/forgot-password-complete.component';
import { MasterdataManagementComponent } from './masterdata-management/masterdata-management.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './masterdata-management/dashboard/dashboard.component';
import { MyAccountComponent } from './masterdata-management/my-account/my-account.component';
import { UserManagementComponent } from './masterdata-management/user-management/user-management.component';
import { AppConstant } from './constants/app-constant';
import { UsersRegComponent } from './masterdata-management/user-management/users-reg/users-reg.component';
import { GroupManagementComponent } from './masterdata-management/group-management/group-management.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: AppConstant.LOGIN_URL,
    pathMatch: 'full'
  },
  {
    path: AppConstant.LOGIN_URL,
    component: LoginComponent
  },
  {
    path: AppConstant.FORGOT_PASSWORD_URL,
    component: ForgotPasswordComponent
  },
  {
    path: AppConstant.FORGOT_PASSWORD_COMPLETE_URL,
    component: ForgotPasswordCompleteComponent
  },
  {
    path: AppConstant.MASTER_MANAGEMENT_URL,
    component: MasterdataManagementComponent,
    children: [
      {
        path: '',
        redirectTo: AppConstant.DASHBOARD_URL,
        pathMatch: 'full'
      },
      {
        path: AppConstant.DASHBOARD_URL,
        component: DashboardComponent
      },
      {
        path: AppConstant.MY_ACCCOUNT_URL,
        component: MyAccountComponent
      },
      {
        path: AppConstant.USER_MANAGEMENT_URL,
        component: UserManagementComponent
      },
      {
        path: AppConstant.USERS_REG_URL,
        component: UsersRegComponent
      },
      {
        path: AppConstant.GROUP_MANAGEMENT_URL,
        component: GroupManagementComponent
      }
    ]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
