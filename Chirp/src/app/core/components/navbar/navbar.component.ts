import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ThemeService } from 'src/app/shared/services/theme.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  theme = 'lara-light-indigo';

  private loginSubscription: any;
  private _isLogin: boolean = false;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.theme = this.themeService.getCurrentTheme();
    this.loginSubscription = this.auth.loginStatus.subscribe(update => {
      this._isLogin = update;
    })
  }

  get isLogin() {
    return this._isLogin;
  }

  selectedButton: string = ''; // Variable to keep track of the selected button

  // Method to handle button click events
  onButtonClick(button: string) {
    this.selectedButton = button;
    if (button === 'home') {
      this.router.navigate(['home']);
    }
    if (this._isLogin) {
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