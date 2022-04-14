import { Component, Input, OnInit } from '@angular/core';
import { GiphyModel } from '../giphy.model';

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
