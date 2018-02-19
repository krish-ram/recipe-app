import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  @Input() ingredient: {name: string, amount: number};
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
  	const ingName  = this.nameInputRef.nativeElement.value;
  	const ingValue = this.amountInputRef.nativeElement.value;
  	const newIngredient = new Ingredient(ingName, ingValue);
  	this.slService.addIngredient(newIngredient);
  }

}
