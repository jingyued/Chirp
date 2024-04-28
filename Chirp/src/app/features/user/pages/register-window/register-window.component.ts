import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogCommunicationService } from './dialog-communication.service';

@Component({
  selector: 'app-register-window',
  templateUrl: './register-window.component.html',
  styleUrls: ['./register-window.component.sass']
})
export class RegisterWindowComponent implements OnInit {

  constructor(private dialogCommunicationService: DialogCommunicationService) { }

  ngOnInit(): void {
  }

  onClosePopupDialog() {
    // Simulate registration success
    this.dialogCommunicationService.emitRegistrationSuccess();
  }
}
