import { Component, Input, OnInit } from '@angular/core';
import { GifService } from '../gif.service';
import { Giphy, GiphyModel } from '../giphy.model';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css'],
})
export class GiphyComponent {
  @Input()
  giphy!: GiphyModel[];
  constructor() {}
}
