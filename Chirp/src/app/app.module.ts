import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './features/user/pages/login-window/login-window.component';
import { RegisterWindowComponent } from './features/user/pages/register-window/register-window.component';
import { DialogService } from 'primeng/dynamicdialog';
import { SettingsPageComponent } from './features/user/pages/settings-page/settings-page.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChirrupModule } from './features/chirrup/chirrup.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    RegisterWindowComponent,
    LoginWindowComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputSwitchModule,
    ChirrupModule,
    SharedModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
