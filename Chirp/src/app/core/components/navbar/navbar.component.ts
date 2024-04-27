import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [    
    { icon: 'pi pi-home' },
    { icon: 'pi pi-heart' },
    { icon: 'pi pi-search' },
    { icon: 'pi pi-user' },
    { icon: 'pi pi-bars' },
  ];

}
