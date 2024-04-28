import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWindowComponent } from './features/user/pages/login-window/login-window.component';
import { SettingsPageComponent } from './features/user/pages/settings-page/settings-page.component';

const routes: Routes = [
  { path: 'login', component: LoginWindowComponent },
  { path: 'settings', component: SettingsPageComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
