import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWindowComponent } from './features/user/pages/login-window/login-window.component';
import { RegisterWindowComponent } from './features/user/pages/register-window/register-window.component';

const routes: Routes = [
  { path: 'login', component: LoginWindowComponent },
  // { path: 'register', component: RegisterWindowComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
