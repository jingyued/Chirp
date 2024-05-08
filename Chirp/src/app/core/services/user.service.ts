import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/profile';
import { User } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl: string = environment.apiUrl;

  private userTmp: Profile = {
    userName: "",
    userEmail: ""
  }

  private source: BehaviorSubject<Profile>;
  private _currentUser: Observable<Profile>;

  constructor(private http: HttpClient) {
    this.source = new BehaviorSubject<Profile>(this.userTmp);
    this._currentUser = this.source.asObservable();
  }

  getUserInfo(userName: string) {
    const url: string = `${this.apiUrl}/users/getProfile/${userName}`;
    this.http.get(url)
      .subscribe(
        res => {
          this.source.next(<User>res);
        }
      );
  }

  get currentUser(): Observable<Profile> {
    return this._currentUser;
  }

  updateCurrentUser(updateUser: Profile) {
    this.source.next(updateUser);
  }
}
