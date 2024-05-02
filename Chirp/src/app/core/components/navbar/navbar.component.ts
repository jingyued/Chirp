import { Component, OnInit } from '@angular/core';
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

  isLogin = true;

  selectedButton: string = ''; // Variable to keep track of the selected button

  // Method to handle button click events
  onButtonClick(button: string) {
    this.selectedButton = button;
    if (button === 'home') {
      if (this.isLogin)
        this.router.navigate(['home'])
    }
    if (button === 'liked') {
      if (this.isLogin)
        this.router.navigate(['liked'])
    }
    if (button === 'profile') {
      this.router.navigate(['profile'])
    }
    if (button === 'settings') {
      if (this.isLogin)
        this.router.navigate(['settings'])
    }
    if (button === 'login') {
      this.router.navigate(['login'])
    }
  }

}