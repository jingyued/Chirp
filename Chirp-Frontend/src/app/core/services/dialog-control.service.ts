import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogCommunicationService } from 'src/app/core/services/dialog-communication.service';

@Injectable({
  providedIn: 'root'
})
export class DialogControlService {

  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService,
  ) { }

  // Providing detailed designs for the popup window
  // offering function to open up and close the popup window when needed
  openPopUp(component: any) {
    try {
      this.ref = this.dialogService.open(component, {
        width: '25rem',
        showHeader: false,
        contentStyle: {
          "max-height": "750px",
          "overflow": "auto",
          "border": "1px solid #ccc",
          "border-radius": "25px"
        }
      });

      this.dialogCommunicationService.closeSignal$.subscribe(() => {
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
