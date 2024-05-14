import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetChirrupsService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  // fetch posts from backend
  getNews(): Observable<any> {
    const url = `${this.apiUrl}/news`;
    return this.http.get(url);
  }
}
