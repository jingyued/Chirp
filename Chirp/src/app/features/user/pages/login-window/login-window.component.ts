import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterWindowComponent } from '../register-window/register-window.component';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.sass']
})
export class LoginWindowComponent implements OnInit, OnDestroy {

  ref: DynamicDialogRef | undefined;
  private unsubscribe$ = new Subject<void>();

  constructor(
    public dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService
  ) { }

  ngOnInit(): void {
    this.dialogCommunicationService.registrationSuccess$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        if (this.ref) {
          this.ref.close();
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openRegisterPopup(event: Event) {
    event.preventDefault();
    this.ref = this.dialogService.open(RegisterWindowComponent, {
      header: 'Register',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"}
    });
  }
}
