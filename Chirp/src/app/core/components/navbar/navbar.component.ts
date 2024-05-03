import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  private _isLogin = true;

  get isLogin(): boolean {
    return this._isLogin;
  }

  set isLogin(value: boolean) {
    this._isLogin = value;
    if (value) {
      //this.router.navigate(['home']);
    }
  }



  selectedButton: string = ''; // Variable to keep track of the selected button

  // Method to handle button click events
  onButtonClick(button: string) {
    this.selectedButton = button;
    if (this.isLogin) {
      if (button === 'home') {
        this.router.navigate(['home']);
      }
      if (button === 'liked') {
        this.router.navigate(['liked']);
      }
      if (button === 'profile') {
        this.router.navigate(['profile']);
      }
      if (button === 'settings') {
        this.router.navigate(['settings']);
      }
    } else {
      if (button === 'login') {
        this.router.navigate(['login']);
      }
    }


  }

}