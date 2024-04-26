import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';



@NgModule({
  declarations: [
    UserInfoComponent,
    ProfilePageComponent,
    SettingsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
