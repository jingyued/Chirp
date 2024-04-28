import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-info',
  templateUrl: './admin-user-info.component.html',
  styleUrls: ['./admin-user-info.component.sass']
})
export class AdminUserInfoComponent implements OnInit {

  currUser: any = {
    "_id": "6205e49f223876263058315a",
    "name": "CallbackCats",
    "userName": "CallbackCats",
    "userEmail": "group.callbackcats@gmail.com",
    "password": "$2a$10$d8QWXUh",
    "userRole": "admin",
    "age": 33,
    "gender": "Male",
    "phone": 1234567890,
    "__v": 0
  };

  constructor() { }

  ngOnInit(): void {
  }


}
