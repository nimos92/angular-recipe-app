import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Grilled Chicken', 'This is a test 1', 'https://s23209.pcdn.co/wp-content/uploads/2015/06/IMG_0329edit-360x360.jpg'),
    new Recipe('Cheese Cake', 'This is a test 2', 'https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg')
  ];
  @Output() recipeItemListClicked = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  OnRecipeClicked(recipeItem : Recipe) {
    this.recipeItemListClicked.emit(recipeItem);
  }

}
