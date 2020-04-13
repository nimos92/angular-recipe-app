import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  manageRecipeClicked: boolean = false;
  @Input() clickedRecipe : Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
