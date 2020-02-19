import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
