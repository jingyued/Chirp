import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { User } from 'src/app/core/models/user';

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
      .subscribe((_resp: any) => this.token = _resp.bearerToken);
  }

  registerUser(user: User) {
    // TODO: find a way to retrieve token
    const url = this.apiUrl + 'register/createNewAccount';
    let res = this.http.post(url, user, { observe: 'response' });
    res.subscribe((_resp: any) => { })
  }

  // checkExistById() {

  // }

  // checkExistByEmail() {

  // }

  get loginToken(): string | undefined {
    return this.token;
  }
}
