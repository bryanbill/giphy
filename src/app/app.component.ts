import { Component, OnInit } from '@angular/core';
import { GifService } from './gif.service';
import { Giphy, GiphyModel } from './giphy.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'giphy';
  giphys: GiphyModel[] = [];
  constructor(private gifService: GifService) {}

  search(event: KeyboardEvent) {
    const keyword: string = (event.target as HTMLInputElement).value;
    this.gifService.getGifsByKeyword(keyword).subscribe((data) => {
      this.giphys = [];
      //@ts-ignore
      data.data.forEach((giphy) => {
        this.giphys.push(
          new Giphy(giphy.id, giphy.url, giphy.title, giphy.rating)
        );
      });
    });
  }
  ngOnInit() {
    this.gifService
      .getTrendingGifs()

      .subscribe((data) =>
        //@ts-ignore
        data.data.forEach((giphy) => {
          this.giphys.push(
            new Giphy(giphy.id, giphy.url, giphy.title, giphy.rating)
          );
        })
      );
  }
}
