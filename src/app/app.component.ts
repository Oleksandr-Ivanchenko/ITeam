import { Component, OnInit } from '@angular/core';
import { CatService } from './services/cat.service';
import { Cat, CatSearchParams } from './store/models/cats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  title = 'Cat-app';
}
