import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ProfileEditWindowComponent } from './pages/profile-edit-window/profile-edit-window.component';
import { ChangePasswordWindowComponent } from './pages/change-password-window/change-password-window.component';
import { LoginWindowComponent } from './pages/login-window/login-window.component';
import { RegisterWindowComponent } from './pages/register-window/register-window.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';




@NgModule({
  declarations: [
    UserInfoComponent,
    ProfilePageComponent,
    SettingsPageComponent,
    ProfileEditWindowComponent,
    ChangePasswordWindowComponent,
    LoginWindowComponent,
    RegisterWindowComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule
  ],
  exports: [
    SettingsPageComponent
  ],
  providers: [
    DialogService
  ]
})
export class UserModule { }
