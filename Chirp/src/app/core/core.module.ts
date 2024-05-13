import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AdminGuard } from './guards/admin.guard';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    ToastModule
  ],

  exports: [
    NavbarComponent
  ],

  providers: [
    AdminGuard
  ]
})
export class CoreModule { }
