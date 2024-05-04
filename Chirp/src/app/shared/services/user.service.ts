import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];

  currentUser: User = {
    userName: "Felix",
    password: "aabbccdd",
    userEmail: "felix@gmail.com"
  }

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get<User[]>('http://localhost:4231/api/users/getAllUsers');
  }
  getCurrentUser() {
    return this.currentUser;
  }
  updateCurrentUser(updateUser: User) {
    this.currentUser = updateUser;
    this.getCurrentUser();
  }
}
