import { Component } from '@angular/core';
import { DialogCommunicationService } from './dialog-communication.service';

@Component({
  selector: 'app-register-window',
  templateUrl: './register-window.component.html',
  styleUrls: ['./register-window.component.sass']
})
export class RegisterWindowComponent {

  constructor(private dialogCommunicationService: DialogCommunicationService) { }

  onClosePopupDialog() {
    this.dialogCommunicationService.emitRegistrationSuccess();
  }
}
