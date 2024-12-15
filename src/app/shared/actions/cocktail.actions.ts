import { createAction, props } from '@ngrx/store';

import { Cocktail } from '../interfaces/cocktail.interface';

export const AddCocktail = createAction(
  '[Cocktail] Add Cocktail',
  props<{ cocktail: Cocktail }>()
);

export const SelectCocktail = createAction(
  '[Cocktail] Select Cocktail',
  props<{ cocktailId: number }>()
);

export const UpdateCocktail = createAction(
  '[Cocktail] Update Cocktail',
  props<{ cocktail: Cocktail }>()
);

export const DeleteCocktail = createAction(
  '[Cocktail] Delete Cocktail',
  props<{ cocktailId: number }>()
);

export const FilterCocktails = createAction(
  '[Cocktail] Filters Cocktail',
  props<{ name: string }>()
);
