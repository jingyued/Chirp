import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chirrup-comment',
  templateUrl: './chirrup-comment.component.html',
  styleUrls: ['./chirrup-comment.component.sass']
})
export class ChirrupCommentComponent implements OnInit {

  islike: boolean = false;

  toggleHeartIcon() {
    this.islike = !this.islike;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
