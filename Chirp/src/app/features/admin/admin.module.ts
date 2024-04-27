import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { AdminUserInfoComponent } from './components/admin-user-info/admin-user-info.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';



@NgModule({
  declarations: [
    AdminUserListComponent,
    AdminUserInfoComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
