import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];

  private userTmp: User = {
    userName: "",
    password: "",
    userEmail: ""
  }

  private source: BehaviorSubject<User>;
  private _currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.source = new BehaviorSubject<User>(this.userTmp)
    this._currentUser = this.source.asObservable();
  }

  getAllData() {
    return this.http.get<User[]>('http://localhost:4231/api/users/getAllUsers');
  }

  getUserInfo(userName: string) {
    return this.http.get(`http://localhost:4231/api/users/getProfile/${userName}`)
      .subscribe(
        res => {
          this.source.next(<User>res);
        });
  }

  get currentUser() {
    return this._currentUser;
  }

  updateCurrentUser(updateUser: User) {
    this.source.next(updateUser);
  }
}
