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
  private _loginStatus: Observable<boolean>; // used for loginStatus broadcasting

  constructor(private http: HttpClient) {
    let currentUserName: string = localStorage.getItem("userName") || ''; 
    this.source = new BehaviorSubject<boolean>(currentUserName === '' ? false : true);
    this._loginStatus = this.source.asObservable();
  }

  /**
   * Handle login service for user, store userName, userRole and auth token locally in service / in localStorage.
   * When logged in, will broadcast loginStatus change to any subscribers
   * @param email login user's email
   * @param password login user's password
   */
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
        error: _err => {
          console.error(`status ${_err.status}: ${_err.error}`);
          alert(`Oops, we got an error when logging you in. \nStatus ${_err.status}: ${_err.error}`);
        }
      });
  }

  /**
   * Handle register service, could taken complete User type data to upload an complete user profile.
   * @param user user's information, refer to interface type User
   */
  registerUser(user: User) {
    // TODO: find a way to retrieve token
    const url = `${this.apiUrl}/register/createNewAccount`;
    this.http.post(url, user, { observe: 'response' }).subscribe({
      // next: _resp => {console.log(_resp)},
      error: _err => {
        console.error(`status ${_err.status}: ${_err.error}`);
        alert(`Oops, we got an error when registering you in. \nStatus ${_err.status}: ${_err.error}`);
      }
    })
  }

  checkExistByName(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/register/checkExistByUsername/${username}`);
  }

  checkExistByEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/register/checkExistByEmail/${email}`);
  }

  /**
   * Switch and broadcast given loginStatus to all subscibers
   * @param status current loginStatus
   */
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
