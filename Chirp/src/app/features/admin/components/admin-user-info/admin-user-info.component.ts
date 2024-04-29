import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.module';

@Component({
  selector: 'app-admin-user-info',
  templateUrl: './admin-user-info.component.html',
  styleUrls: ['./admin-user-info.component.sass']
})
export class AdminUserInfoComponent implements OnInit {

  @Input() currUser: User | any;

  constructor() { }

  ngOnInit(): void {
  }


}
