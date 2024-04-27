import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChirrupListComponent } from './components/chirrup-list/chirrup-list.component';
import { ChirrupCardComponent } from './components/chirrup-card/chirrup-card.component';



@NgModule({
  declarations: [
    ChirrupListComponent,
    ChirrupCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
