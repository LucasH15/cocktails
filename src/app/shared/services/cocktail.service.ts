import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails: Cocktail[] = [];
  public selectedCocktail$: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails[0]);
  private apiUrl = "http://localhost:3000";

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.getCocktails().subscribe(cocktails => {
      this.cocktails = cocktails;

      this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.get('id')) {
          this.selectedCocktail$.next(this.cocktails.find(({ id }) => id === parseInt(paramMap.get('id'))));
        }
      })
    });
  }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.apiUrl + '/cocktails');
  }

  public selectCocktail(index?: number) {
    this.selectedCocktail$.next(this.cocktails.find(({ id }) => id === index));
  }

  public addCocktail(cocktail: Cocktail) {
    const id = this.cocktails[this.cocktails.length - 1].id + 1;
    this.cocktails = [...this.cocktails, { ...cocktail, id }];
    console.log(this.cocktails);
  }
}
