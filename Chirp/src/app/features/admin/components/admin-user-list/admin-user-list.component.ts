import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.sass']
})
export class AdminUserListComponent implements OnInit {

  usersList: any = [
    // Taking some dummy template data for now
    {
      "_id": "6205e49f",
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
      "_id": "6209c0d8",
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
    {
      "_id": "6209e666",
      "name": "CallbackCats",
      "userName": "CallbackCats",
      "userEmail": "callbackcats@gmail.com",
      "password": "$2a$10$ZY759JIXWsAlLL8fmrbBUO35quvChpie/8G5LbJlm04EA5KSwjC0u",
      "userRole": "admin",
      "age": 33,
      "gender": "male",
      "phone": 1234567890,
      "__v": 0
    },
    {
      "_id": "620fa50b",
      "name": "cancelme001",
      "userName": "delete001",
      "userEmail": "skajndaksjd",
      "password": "$2a$10$Qwx3KdVT9ukisxTdcT/58ee4TbRL.B/rUckTMPISLQFTMupdk3TsC",
      "userRole": "user",
      "age": 22,
      "gender": "M",
      "phone": 9292819128,
      "__v": 0
    },
  ]

  selectedId: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddNew(){
    console.log("gonna add new");
  }

  // TODO: try not display user when click delete
  onSelectUser(event: Event){
    console.log(event.target);
  }

  onDeleteUser(){
    console.log("gonna delete");
  }
}
