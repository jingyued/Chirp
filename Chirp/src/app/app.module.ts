import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
// import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './features/user/pages/login-window/login-window.component';
import { RegisterWindowComponent } from './features/user/pages/register-window/register-window.component';
import { DialogCommunicationService } from './features/user/pages/register-window/dialog-communication.service';
import { DialogService } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    AppComponent,
    RegisterWindowComponent,
    LoginWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
