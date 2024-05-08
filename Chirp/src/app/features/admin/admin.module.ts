import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserInfoComponent } from './components/admin-user-info/admin-user-info.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminService } from './services/admin.service';



@NgModule({
  declarations: [
    AdminUserInfoComponent,
    AdminPanelComponent,
  ],
  
  imports: [
    CommonModule
  ],

  exports: [
  ],

  providers: [
    AdminService
  ]
})
export class AdminModule { }
