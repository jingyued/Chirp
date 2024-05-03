import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
// import { Comment } from 'path-to-your-comment-model'; // Import your Comment model

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl: string = "http://localhost:4231/api/";

  constructor(private http: HttpClient) { }

  postComment(comment: Comment) {
    const url = this.apiUrl + 'comments'; // Adjust the endpoint based on your backend API
    return this.http.post(url, comment)
      .pipe(
        catchError(error => {
          console.error('Error posting comment:', error);
          throw error;
        })
      );
  }

  // You can add more methods here as needed, such as retrieving comments, updating comments, deleting comments, etc.
}
