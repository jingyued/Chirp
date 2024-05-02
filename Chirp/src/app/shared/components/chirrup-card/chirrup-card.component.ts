import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chirrup-card',
  templateUrl: './chirrup-card.component.html',
  styleUrls: ['./chirrup-card.component.sass']
})
export class ChirrupCardComponent implements OnInit {

  islike: boolean = !false;

  toggleHeartIcon() {
    this.islike = !this.islike;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

