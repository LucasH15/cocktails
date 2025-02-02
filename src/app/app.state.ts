import { Cocktail } from './shared/interfaces/cocktail.interface';

export interface AppState {
  readonly cocktails: Cocktail[];
  theme: string;
}
