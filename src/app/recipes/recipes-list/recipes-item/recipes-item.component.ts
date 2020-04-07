import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() recipeItemClicked = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked() {
    this.recipeItemClicked.emit(this.recipeItem);
  }

}
