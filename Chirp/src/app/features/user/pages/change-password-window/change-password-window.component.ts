import { Component, OnInit } from '@angular/core';
import { DialogCommunicationService } from '../../../../shared/services/dialog-communication.service';

@Component({
  selector: 'app-change-password-window',
  templateUrl: './change-password-window.component.html',
  styleUrls: ['./change-password-window.component.sass']
})
export class ChangePasswordWindowComponent implements OnInit {

  constructor(private dialogCommunicationService: DialogCommunicationService) { }

  ngOnInit(): void {
  }

  onClosePopupDialog() {
    this.dialogCommunicationService.emitRegistrationSuccess();
  }
}
