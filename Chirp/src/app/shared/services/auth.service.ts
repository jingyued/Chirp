import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { __exportStar, __read } from 'tslib';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = "http://localhost:4231/api";
  private token?: string;
  private name?: string;

  constructor(private http: HttpClient, private userService: UserService) { }

  loginAuth(email: string, password: string) {
    const url = `${this.apiUrl}/login`;
    this.http.post(url, { userEmail: email, password: password })
      .subscribe({
        next: (_resp: any) => {
          this.token = _resp.bearerToken;
          this.name = _resp.userName;
          localStorage.setItem("userRole", _resp.userRole);
          // console.log(this.token);
          // console.log(this.name);
          // console.log(localStorage.getItem("userRole"));
          // this.userService.getUserByName(_resp.userName).subscribe(res => console.log(res));
        },
        error: _err => console.error(`status ${_err.status}: ${_err.error}`)
      });
  }

  registerUser(user: User) {
    // TODO: find a way to retrieve token
    const url = `${this.apiUrl}/register/createNewAccount`;
    this.http.post(url, user, { observe: 'response' }).subscribe({
      // next: _resp => {console.log(_resp)},
      error: _err => console.error(`status ${_err.status}: ${_err.error}`)
    })
  }

  checkExistByName(username: string) {
    const url = `${this.apiUrl}/register/checkExistByUsername/${username}`;
    this.http.get(url).subscribe({
      next: _resp => {return <boolean>_resp},
      error: _err => console.error(`status ${_err.status}: ${_err.error}`)
    });
  }

  checkExistByEmail(email: string) {

  }

  get loginToken(): string | undefined {
    return this.token;
  }

  get userName(): string | undefined {
    return this.name;
  }
}
