import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChirrupListComponent } from './components/chirrup-list/chirrup-list.component';
import { ChirrupCardComponent } from './components/chirrup-card/chirrup-card.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GetChirrupsService } from '../shared/services/get-chirrups.service'


@NgModule({
  declarations: [
    ChirrupListComponent,
    ChirrupCardComponent
  ],

  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
  ],

  exports: [
    ChirrupCardComponent,
    ChirrupListComponent,
  ]


})
export class SharedModule { }
