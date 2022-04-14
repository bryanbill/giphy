import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GifService } from './gif.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giphy';
  private gifService: GifService;
  constructor() {
    this.gifService = new GifService(
      new HttpClient(1,0)
    ;
   }

  search(keyword: string) {
    console.log(keyword);
    
  }
}
