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


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'forgotPasswordComplete',
    component: ForgotPasswordCompleteComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'masterdataManagement',
    component: MasterdataManagementComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'myAccount',
        component: MyAccountComponent
      },
      {
        path: 'userManagement',
        component: UserManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
