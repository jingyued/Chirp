import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { __exportStar, __read } from 'tslib';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  private token?: string;
  private name?: string;
  private source: BehaviorSubject<boolean>;
  private _loginStatus: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.source = new BehaviorSubject<boolean>(localStorage.getItem("userName") === '' ? false : true)
    this._loginStatus = this.source.asObservable();
  }

  loginAuth(email: string, password: string) {
    const url = `${this.apiUrl}/login`;
    this.http.post(url, { userEmail: email, password: password })
      .subscribe({
        next: (_resp: any) => {
          localStorage.setItem("userName", _resp.userName);
          localStorage.setItem("userRole", _resp.userRole);
          alert(`Welcome back, ${_resp.userName}`);
          this.changeLoginStatus(true);
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

  checkExistByName(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/register/checkExistByUsername/${username}`);
  }

  checkExistByEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/register/checkExistByEmail/${email}`);
  }

  changeLoginStatus(status: boolean) {
    this.source.next(status);
  }

  get loginToken(): string | undefined {
    return this.token;
  }

  get userName(): string | undefined {
    return this.name;
  }

  get loginStatus(): Observable<boolean> {
    return this._loginStatus;
  }
}
