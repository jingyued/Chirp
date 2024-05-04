import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get<User[]>('http://localhost:4231/api/users/getAllUsers');
  }
}
