import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';
import { ChangePasswordWindowComponent } from '../change-password-window/change-password-window.component';
import { Subject } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.sass']
})
export class SettingsPageComponent implements OnInit, OnDestroy {

  ref: DynamicDialogRef | undefined;
  private unsubscribe$ = new Subject<void>();

  isDark = false;

  constructor(    
    private dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService,
    private themeService: ThemeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isDark = this.themeService.getCurrentTheme() === 'lara-dark-indigo';
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

    try {
      this.ref = this.dialogService.open(ChangePasswordWindowComponent, {
        width: '25rem',
        showHeader: false,
        contentStyle: {
          "max-height": "600px",
          "overflow": "auto",
          "border": "1px solid #ccc",
          "border-radius": "25px" // Optional: Add border-radius for rounded corners
        }
      });

      this.dialogCommunicationService.registrationSuccess$.subscribe(() => {
        this.closeDialog();
      })
    } catch (error) {
      console.error('Error opening dialog:', error);
    }
  }

  onClickAdmin() {
    this.router.navigate(['admin']);
  }

  closeDialog() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
