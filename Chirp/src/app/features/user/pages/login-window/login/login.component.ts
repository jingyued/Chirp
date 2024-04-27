import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openRegisterPopup() {
    const registerWindow = window.open('./register', '_blank', 'width=600,height=400');
    if (registerWindow) {
      registerWindow.focus();
    } else {
      alert('Popup blocked. Please allow popups for this site.');
    }
  }

}
