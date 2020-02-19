import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordCompleteComponent } from './forgot-password/forgot-password-complete/forgot-password-complete.component';
import { MasterdataManagementComponent } from './masterdata-management/masterdata-management.component';
import { LogoutComponent } from './logout/logout.component';


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
    component: MasterdataManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
