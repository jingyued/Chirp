import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';
import { ChangePasswordWindowComponent } from '../change-password-window/change-password-window.component';
import { Subject } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OpenPopUpService } from 'src/app/shared/services/open-pop-up.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.sass']
})
export class SettingsPageComponent implements OnInit, OnDestroy {

  ref: DynamicDialogRef | undefined;
  private unsubscribe$ = new Subject<void>();

  isDark = false;
  
  private loginSubscription: any;
  private _isLogin: boolean = false;

  constructor(    
    private dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService,
    private themeService: ThemeService,
    private router: Router,
    private auth: AuthService,
    private popup: OpenPopUpService
  ) { }

  ngOnInit(): void {
    this.isDark = this.themeService.getCurrentTheme() === 'lara-dark-indigo';
    this.loginSubscription = this.auth.loginStatus.subscribe(update => {
      this._isLogin = update;
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggleTheme(event: any) {
    if (this.isDark) {
      this.themeService.setTheme("lara-dark-indigo");
    } else {
      this.themeService.setTheme("lara-light-indigo");
    }
  }

  onClickPassword() {
    if (this._isLogin) {
      this.popup.openPopUp(ChangePasswordWindowComponent);
    }
  }

  onClickAdmin() {
    this.router.navigate(['admin']);
  }

  onLogOut() {
    localStorage.setItem("userName", '');
    localStorage.setItem("userRole", '');
    this.auth.changeLoginStatus(false);
    alert('See you later');
  }
}
