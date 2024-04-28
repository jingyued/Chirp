import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-info',
  templateUrl: './admin-user-info.component.html',
  styleUrls: ['./admin-user-info.component.sass']
})
export class AdminUserInfoComponent implements OnInit {

  userList: any = [
    // Taking some dummy template data for now
    {
      "_id": "6205e49f223876263058315a",
      "name": "CallbackCats",
      "userName": "CallbackCats",
      "userEmail": "group.callbackcats@gmail.com",
      "password": "$2a$10$d8QWXUh.xZKdluBDAriCpeW2VrXm1JCuJZqgdTkTm/l0aBwmFiz2q",
      "userRole": "admin",
      "age": 33,
      "gender": "Male",
      "phone": 1234567890,
      "__v": 0
    },
    {
      "_id": "6209c0d87166c25a276912d6",
      "name": "Honey",
      "userName": "Honey",
      "userEmail": "honey@test.com",
      "password": "$2a$10$CH47MjY.lB4cOBn4Wua0auc2mj0bht/9lW8rl79.zmqHsYPP2AL.m",
      "userRole": "user",
      "age": 11,
      "gender": "Female",
      "phone": 1234567890,
      "__v": 0
    },
  ]

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
