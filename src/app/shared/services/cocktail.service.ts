import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';
import datas from '../../datas.json';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject(datas);
  public selectedCocktail$: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails$.value[0]);

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.get('id')) {
        this.selectedCocktail$.next(this.cocktails$.value.find(({ id }) => id === parseInt(paramMap.get('id'))));
      }
    })
  }

  public selectCocktail(index?: number) {
    this.selectedCocktail$.next(this.cocktails$.value.find(({ id }) => id === index));
  }
}
