import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Input() ingredient: {name: string, amount: number};
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
  	const ingName  = this.nameInputRef.nativeElement.value;
  	const ingValue = this.amountInputRef.nativeElement.value;
  	const newIngredient = new Ingredient(ingName, ingValue);
  	this.ingredientAdded.emit(newIngredient);
  }

}
