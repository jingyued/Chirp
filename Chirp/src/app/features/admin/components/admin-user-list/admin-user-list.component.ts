import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.sass']
})
export class AdminUserListComponent implements OnInit {

  selectedIndex: number | null = null;
  usersList: User[] = [];
  selectedUser: User | undefined = {
    "_id": "6205e49f223876263058315a",
    "name": "CallbackCats",
    "userName": "CallbackCats",
    "userEmail": "group.callbackcats@gmail.com",
    "password": "$2a$10$d8QWXUh",
    "userRole": "admin",
    "age": 33,
    "gender": "Male",
    "phone": 1234567890,
  };

  constructor(private users: UserService, private auth: AuthService) { }

  ngOnInit(): void {
    this.users.getAllData().subscribe((res) => {
      this.usersList = [...res];
    });
  }

  onAddNew(){
    console.log("gonna add new");
  }

  onRegist() {
    this.auth.registerUser({userName: "axnaxa", userEmail: "axnaxa@gmail.com", password: "aaaaaaaa"})
  }

  onLogin() {
    this.auth.loginAuth("axnaxar@gmail.com", "aaaaaaaa");
  }

  // TODO: try not display user when click delete
  onSelectUser(index: number){
    this.selectedIndex = index;
    this.selectedUser = this.usersList[index];
  }

  onDeleteUser(index: number){
    event?.stopPropagation();
    console.log("gonna delete #"+this.usersList[index]._id);
  }
}
