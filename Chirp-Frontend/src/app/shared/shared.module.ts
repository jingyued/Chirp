import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogService } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
  ],

  exports: [
  ],

  providers: [
    DialogService
  ]

})
export class SharedModule { }
