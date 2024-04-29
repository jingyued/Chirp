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

import { CoreModule } from './core/core.module';
import { UserModule } from './features/user/user.module';
import { ChirrupModule } from './features/chirrup/chirrup.module';
import { SharedModule } from './shared/shared.module';
import { ChirrupCommentComponent } from './features/chirrup/components/chirrup-comment/chirrup-comment.component';
import { HttpClientModule } from '@angular/common/http'
import { AdminModule } from './features/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterWindowComponent,
    LoginWindowComponent,
    ChirrupCommentComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ButtonModule,
    InputSwitchModule,
    ChirrupModule,
    SharedModule,
    UserModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
