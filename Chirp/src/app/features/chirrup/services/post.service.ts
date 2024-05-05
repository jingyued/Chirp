import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { Chirrup } from 'src/app/core/models/chirrup';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl: string = "http://localhost:4231/api/news";

  constructor(private http: HttpClient, private sharedService: SharedService) { }


  postChirrup(chirrup: Chirrup): Observable<any> {
    return this.http.post(this.apiUrl, chirrup).pipe(
      catchError(error => {
        throw 'Error posting story: ' + error.message;
      })
    );
  }


}
