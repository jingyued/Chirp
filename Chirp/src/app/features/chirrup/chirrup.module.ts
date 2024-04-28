import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChirrupRoutingModule } from './chirrup-routing.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { UserRoutingModule } from '../user/user-routing.module';
import { NewChirrupComponent } from './components/new-chirrup/new-chirrup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LikedPageComponent } from './pages/liked-page/liked-page.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    NewChirrupComponent,
    HomePageComponent,
    LikedPageComponent
  ],
  imports: [
    CommonModule,
    ChirrupRoutingModule,
    AdminRoutingModule,
    UserRoutingModule,
    ButtonModule,
    SharedModule,

  ],
  exports: [
    NewChirrupComponent,
    HomePageComponent,
    LikedPageComponent,
  ],

})
export class ChirrupModule { }
