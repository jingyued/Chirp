import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { __exportStar, __read } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = "http://localhost:4231/api/";
  private token?: string;
  private name?: string;

  constructor(private http: HttpClient) { }

  loginAuth(email: string, password: string) {
    const url = this.apiUrl + 'login';
    this.http.post(url, { userEmail: email, password: password })
      .subscribe({
        next: (_resp: any) => {
          this.token = _resp.bearerToken;
          this.name = _resp.userName;
          localStorage.setItem("userRole", _resp.userRole);
        },
        error: _err => console.log("error status " + _err.status + " - " + _err.error)
      });
  }

  registerUser(user: User) {
    // TODO: find a way to retrieve token
    const url = this.apiUrl + 'register/createNewAccount';
    let res = this.http.post(url, user, { observe: 'response' });
    res.subscribe({
      next: _resp => { },
      error: _err => console.log("error status " + _err.status + " - " + _err.error)
    })
  }

  // checkExistById(id: string) {

  // }

  // checkExistByEmail(email: string) {

  // }

  get loginToken(): string | undefined {
    return this.token;
  }

  get userName(): string | undefined {
    return this.name;
  }
}
