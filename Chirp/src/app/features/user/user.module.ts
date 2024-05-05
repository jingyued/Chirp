import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ProfileEditWindowComponent } from './pages/profile-edit-window/profile-edit-window.component';
import { ChangePasswordWindowComponent } from './pages/change-password-window/change-password-window.component';
import { LoginWindowComponent } from './pages/login-window/login-window.component';
import { RegisterWindowComponent } from './pages/register-window/register-window.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    AvatarModule,
    AvatarGroupModule,
    StyleClassModule,
    ButtonModule,
    InputSwitchModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DialogService
  ]
})
export class UserModule { }