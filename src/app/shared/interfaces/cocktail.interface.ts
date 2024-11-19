import { Ingredient } from './ingredient.interface';

export interface Cocktail {
  id: number;
  name: string;
  image: string;
  description: string;
  ingredients?: Ingredient[];
}
