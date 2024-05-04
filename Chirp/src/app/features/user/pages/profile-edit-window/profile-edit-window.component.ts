import { Component, OnInit } from '@angular/core';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';

@Component({
  selector: 'app-profile-edit-window',
  templateUrl: './profile-edit-window.component.html',
  styleUrls: ['./profile-edit-window.component.sass']
})
export class ProfileEditWindowComponent implements OnInit {

  constructor(private dialogCommunicationService: DialogCommunicationService) { }

  ngOnInit(): void {
  }

  user = {
    name: 'Felix',
    gender: 'Male',
    birth: new Date("1997-11-06"),
    email: "zixinzhang0519@gmail.com"
  }

  months: number[] = Array.from(Array(12).keys()).map(month => month + 1);
  days: number[] = Array.from(Array(31).keys()).map(day => day + 1);
  years: number[] = Array.from(Array(100).keys()).map(year => new Date().getFullYear() - year);

  selectedMonth: number = this.user.birth.getMonth() + 1; // Default to January
  selectedDay: number = this.user.birth.getDate() + 1; // Default to the 1st
  selectedYear: number = this.user.birth.getFullYear(); // Default to the current year

  onClosePopupDialog() {
    this.dialogCommunicationService.emitRegistrationSuccess();
  }
}
