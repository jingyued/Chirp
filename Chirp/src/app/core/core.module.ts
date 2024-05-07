import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AdminGuard } from './guards/admin.guard';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AdminGuard
  ]
})
export class CoreModule { }
