import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { __exportStar, __read } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = "http://localhost:4231/api/";
  private token?: string;

  constructor(private http: HttpClient) { }

  loginAuth(email: string, password: string) {
    const url = this.apiUrl + 'login';
    this.http.post(url, { userEmail: email, password: password })
      .subscribe({
        next: (_resp: any) => this.token = _resp.bearerToken,
        error: _err => console.log(_err.error)
      });
  }

  registerUser(user: User) {
    // TODO: find a way to retrieve token
    const url = this.apiUrl + 'register/createNewAccount';
    let res = this.http.post(url, user, { observe: 'response' });
    res.subscribe({
      next: _resp => {},
      error: _err => console.log("status "+_err.status+" - "+_err.error)
    })
  }

  // checkExistById() {

  // }

  // checkExistByEmail() {

  // }

  get loginToken(): string | undefined {
    return this.token;
  }
}
