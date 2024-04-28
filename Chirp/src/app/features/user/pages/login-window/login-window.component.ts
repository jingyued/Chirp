import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterWindowComponent } from '../register-window/register-window.component';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.sass']
})
export class LoginWindowComponent implements OnDestroy {

  ref: DynamicDialogRef | undefined;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService
  ) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openRegisterPopup(event: Event) {
    event.preventDefault();

    try {
      this.ref = this.dialogService.open(RegisterWindowComponent, {
        header: 'Register',
        width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" }
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
