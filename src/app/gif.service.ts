import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private apiKey = 'jzv82QtHqek4P0S14L6t44d8tPk0ggwA';

  constructor(private http: HttpClient) {}

  // Get a list of trending GIFs
  getTrendingGifs(limit?: number) {
    // Paginate results by setting the limit to 25
    return this.http
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=${
          limit ?? 24
        }`
      )
      .pipe(catchError(this.handleError));
  }

  // Get a list of GIFs by searching for a keyword
  getGifsByKeyword(keyword: string) {
    return this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${this.apiKey}&limit=25`
      )
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
