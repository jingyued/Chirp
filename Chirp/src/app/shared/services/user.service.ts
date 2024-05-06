import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];

  private _currentUser: User = {
    userName: "",
    password: "",
    userEmail: ""
  }

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get<User[]>('http://localhost:4231/api/users/getAllUsers');
  }

  getUserInfo(userName: string) {
    return this.http.get(`http://localhost:4231/api/users/getProfile/${userName}`);
  }

  get currentUser() {
    return this._currentUser;
  }

  set currentUser(updateUser: User) {
    this._currentUser = updateUser;
  }
}
