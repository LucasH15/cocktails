import { createReducer, on } from '@ngrx/store';

import { UpdateTheme } from '../actions/theme.actions';

export const initialState = 'light';

export const themeReducer = createReducer(
    initialState,
    on(UpdateTheme, (state, { theme }) => theme)
);
