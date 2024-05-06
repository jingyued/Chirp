import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Comment } from 'src/app/core/models/chirrup'; // Import your Comment interface

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl: string = "http://localhost:4231/api/"; // Adjust the base URL

  constructor(private http: HttpClient) { }
  
  addComment(chirrupId: string, comment: Comment) {
    const url = `${this.apiUrl}news/addComment/${chirrupId}`; // Adjust the endpoint based on your backend API
    return this.http.patch<Comment>(url, comment) // Use PATCH method to add a comment
      .pipe(
        catchError(error => {
          console.error('Error adding comment:', error);
          throw error;
        })
      );
  }

  // You can add more methods here as needed, such as retrieving comments, updating comments, deleting comments, etc.
}
