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

  selectedButton: string = ''; // Variable to keep track of the selected button

  // Method to handle button click events
  onButtonClick(button: string) {
    this.selectedButton = button;
    if (button === 'home') {
      this.router.navigate(['home'])
    }
    if (button === 'liked') {
      this.router.navigate(['liked'])
    }
    if (button === 'profile') {
      this.router.navigate(['profile'])
    }
    if (button === 'settings') {
      this.router.navigate(['settings'])
    }
  }
}
