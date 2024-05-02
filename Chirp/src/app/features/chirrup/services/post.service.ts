import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Chirrup } from 'src/app/core/models/chirrup';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl: string = "http://localhost:4231/api/news";

  constructor(private http: HttpClient) { }


  postChirrup(chirrup: Chirrup): Observable<any> {
    console.log('Posting this chirrup:', chirrup);
    return this.http.post(this.apiUrl, chirrup).pipe(
      catchError(error => {
        throw 'Error posting story: ' + error.message;
      })
    );
  }

}