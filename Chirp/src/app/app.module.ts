import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { UserModule } from './features/user/user.module';
import { ChirrupModule } from './features/chirrup/chirrup.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http'
import { AdminModule } from './features/admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ButtonModule,
    UserModule,
    SharedModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
    DialogService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
