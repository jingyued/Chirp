import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';
import { ChangePasswordWindowComponent } from '../change-password-window/change-password-window.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.sass']
})
export class SettingsPageComponent implements OnInit, OnDestroy {

  ref: DynamicDialogRef | undefined;
  private unsubscribe$ = new Subject<void>();

  constructor(    
    private dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onClickPassword() {

    try {
      this.ref = this.dialogService.open(ChangePasswordWindowComponent, {
        width: '25rem',
        showHeader: false,
        contentStyle: {
          "max-height": "600px",
          "overflow": "auto",
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

  closeDialog() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
