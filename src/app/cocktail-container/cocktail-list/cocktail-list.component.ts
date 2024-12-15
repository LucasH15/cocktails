import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { AppState } from '../../app.state';
import { FilterCocktails } from '../../shared/actions/cocktail.actions';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements OnInit {
  cocktails$: Observable<Cocktail[]>;
  active: boolean = false;
  selectedCocktailId: number;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.cocktails$ = store.pipe(select('cocktails'));
  }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    this.selectedCocktailId = parseInt(urlParams.get('id'));
  }

  public showCocktail(cocktailIndex?: number) {
    this.router.navigate([], { queryParams: { id: cocktailIndex } });
    this.selectedCocktailId = cocktailIndex;
  }

  updateCocktails(search: string) {
    this.showCocktail();
    this.store.dispatch(FilterCocktails({ name: search }));
  }

  public showModal() {
    this.active = !this.active;
  }
}
