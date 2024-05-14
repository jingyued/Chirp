import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, Subject, BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chirrup, Comment, ChirrupPost } from '../../../core/models/chirrup'


@Injectable({
  providedIn: 'root'
})
export class ChirrupService {

  private apiUrl: string = environment.apiUrl;
  private newsSubject: BehaviorSubject<Chirrup[]> = new BehaviorSubject<Chirrup[]>([]);

  constructor(private http: HttpClient) { }


  get news(): Observable<Chirrup[]> {
    return this.newsSubject.asObservable();
  }

  // retrieve news items from the backend
  private getNews(): Observable<Chirrup[]> {
    const url = `${this.apiUrl}/news`;
    return this.http.get<Chirrup[]>(url);
  }

  // use transformedData to update newsSubject
  private updateNews(data: Chirrup[]): void {
    const transformedData = data.map(this.transformChirrup.bind(this));
    this.newsSubject.next(transformedData);
  }

  // get data from backend, transform it and update newsSubject
  loadChirrups(): void {
    this.getNews().subscribe({
      next: (data: Chirrup[]) => {
        this.updateNews(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  // post new chirrup, update the newsSubject with transformed returned chirrup and originial newsSubject value
  postChirrup(chirrup: ChirrupPost): Observable<Chirrup> {
    const url = `${this.apiUrl}/news`;
    return this.http.post<Chirrup>(url, chirrup).pipe(
      map(newChirrup => {
        this.updateNews([...this.newsSubject.value, this.transformChirrup(newChirrup)]);
        return newChirrup;
      }),
      catchError(error => {
        throw new Error('Error posting chirrup: ' + error.message);
      })
    );
  }

  // add new comment, update the newsSubject by editing originial newsSubject value: add returned comment to that post by id
  addComment(chirrupId: string, comment: Comment): Observable<Comment> {
    const url = `${this.apiUrl}/news/addComment/${chirrupId}`;
    return this.http.patch<Comment>(url, comment).pipe(
      map(newComment => {
        const updatedNews = this.newsSubject.value.map(chirrup => {
          if (chirrup._id === chirrupId) { // find that chirrup need update with new comment
            const updatedChirrup = { ...chirrup }; // copy that post
            updatedChirrup.comment.push(newComment); // edit that post
            return updatedChirrup;
          }
          return chirrup;
        });

        this.updateNews(updatedNews);
        return newComment;
      }),

      catchError(error => {
        console.error('Error adding comment:', error);
        throw error;
      })
    );
  }

  // the data get from backend do not have islike or showComments properties
  // this transformChirrup function will add those properties before display them on the frontend
  private transformChirrup(chirrup: Chirrup): Chirrup {
    let isLiked: boolean = false;
    const storedIsLiked: string | null = localStorage.getItem(chirrup._id);
    isLiked = storedIsLiked === 'true';
    return {
      ...chirrup,
      islike: isLiked,
      showComments: true //test
    };
  }
}
