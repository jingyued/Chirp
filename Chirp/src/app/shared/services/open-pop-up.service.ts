import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogCommunicationService } from 'src/app/features/user/pages/register-window/dialog-communication.service';

@Injectable({
  providedIn: 'root'
})
export class OpenPopUpService {

  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService,
  ) { }

  openPopUp(component: any) {
    try {
      this.ref = this.dialogService.open(component, {
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

  private closeDialog() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
