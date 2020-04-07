import { Component, Input, EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-recipe';
  selectedPage : string;

  constructor () {
    this.selectedPage = 'recipes';
  }

  pageSelected(name: string) {
    this.selectedPage = name;
  }

}
