import { Ingredient } from './ingredient.interface';

export interface baseCocktail {
  name: string;
  image: string;
  description: string;
  ingredients: Ingredient[];
}

export interface Cocktail extends baseCocktail {
  id: number;
}
