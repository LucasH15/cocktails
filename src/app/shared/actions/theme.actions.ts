import { createAction, props } from '@ngrx/store';

export const UpdateTheme = createAction(
  '[Theme] Update Theme',
  props<{ theme: string }>()
);
