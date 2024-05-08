import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChirrupCardComponent } from './components/chirrup-card/chirrup-card.component';
import { DialogService } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    ChirrupCardComponent,
  ],

  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
  ],

  exports: [
    ChirrupCardComponent,
  ],
  
  providers: [
    DialogService
  ]


})
export class SharedModule { }
