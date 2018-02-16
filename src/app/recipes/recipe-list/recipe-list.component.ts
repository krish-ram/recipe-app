import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Masala Papad', "Masala Papad", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Masala_Papadum.jpg/1600px-Masala_Papadum.jpg"),
    new Recipe('Super Masala Papad', "Super Masala Papad", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Masala_Papadum.jpg/1600px-Masala_Papadum.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe); 
  }
}
