import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private apiKey = 'jzv82QtHqek4P0S14L6t44d8tPk0ggwA';

  constructor(private http: HttpClient) {}

  // Get a list of trending GIFs
  getTrendingGifs() {
    return this.http.get(
      `http://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}`
    );
  }

  // Get a list of GIFs by searching for a keyword
  getGifsByKeyword(keyword: string) {
    return this.http.get(
      `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${this.apiKey}`
    );
  }
}
