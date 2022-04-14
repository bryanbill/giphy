import { Component, OnInit } from '@angular/core';
import { GifService } from './gif.service';
import { GiphyModel } from './giphy.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'giphy';
  giphys!: GiphyModel[];
  constructor(private gifService: GifService) {}

  search(keyword: string) {
    this.gifService
      .getGifsByKeyword(keyword)
      .subscribe((data) => console.log(data));
  }
  ngOnInit() {
    this.gifService.getTrendingGifs().subscribe((data) => console.log(data));
  }
}
