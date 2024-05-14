import { Component, OnInit } from '@angular/core';
import { ChangePasswordWindowComponent } from '../../components/change-password-window/change-password-window.component';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DialogControlService } from 'src/app/core/services/dialog-control.service';
import { Message, MessageService } from 'primeng/api';


@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.sass'],
  providers: [MessageService]
})
export class SettingsPageComponent implements OnInit {

  isDark = false;
  
  private _isLogin: boolean = false;


  constructor(    
    private themeService: ThemeService,
    private router: Router,
    private authService: AuthService,
    private dialogService: DialogControlService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.isDark = this.themeService.getCurrentTheme() === 'lara-dark-indigo';
    this.authService.loginStatus.subscribe(update => {
      this._isLogin = update;
    })
  }

  onToggleTheme() {
    if (this.isDark) {
      this.themeService.setTheme("lara-dark-indigo");
    } else {
      this.themeService.setTheme("lara-light-indigo");
    }
  }

  onClickPassword() {
    if (this._isLogin) {
      this.dialogService.openPopUp(ChangePasswordWindowComponent);
    }
  }

  onClickAdmin() {
    this.router.navigate(['admin']);
  }

  onLogOut() {
    localStorage.setItem("userName", '');
    localStorage.setItem("userRole", '');
    this.authService.changeLoginStatus(false);

    this.messageService.add({ severity: 'success', summary: 'Logged out successfully', detail: 'See you later!', key: 'bc', life: 3000 });
  }
}

