import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './features/user/pages/login-window/login-window.component';
import { RegisterWindowComponent } from './features/user/pages/register-window/register-window.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ChirrupModule } from './features/chirrup/chirrup.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http'
import { AdminModule } from './features/admin/admin.module';


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
    ButtonModule,
    ChirrupModule,
    SharedModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
