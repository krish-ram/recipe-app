import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

	constructor (private slService: ShoppingListService) {};
	
	recipeSelected = new EventEmitter<Recipe>();
	
	private recipes: Recipe[] = [
		new Recipe('Masala Papad', 
		"Masala Papad", 
		"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Masala_Papadum.jpg/1600px-Masala_Papadum.jpg", 
		[
			new Ingredient('Papad', 1),
			new Ingredient('Sev', 25)
		]),
		new Recipe('Super Masala Papad', 
		"Super Masala Papad", 
		"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Masala_Papadum.jpg/1600px-Masala_Papadum.jpg", 
		[
			new Ingredient('Spicy Papad', 1),
			new Ingredient('Sev Puri', 25)
		])
  	];

  	getRecipes() {
  		return this.recipes.slice();
	}

	addIngredientToList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}