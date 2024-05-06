import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChirrupListComponent } from './components/chirrup-list/chirrup-list.component';
import { ChirrupCardComponent } from './components/chirrup-card/chirrup-card.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GetChirrupsService } from '../shared/services/get-chirrups.service';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';


@NgModule({
  declarations: [
    ChirrupListComponent,
    ChirrupCardComponent,
    ReversePipe
  ],

  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FormsModule
  ],

  exports: [
    ChirrupCardComponent,
    ChirrupListComponent,
  ]


})
export class SharedModule { }
