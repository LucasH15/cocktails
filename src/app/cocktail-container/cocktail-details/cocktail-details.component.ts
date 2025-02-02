import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';

import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class CocktailDetailsComponent implements OnInit {
  cocktail: Cocktail;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const currentId = urlParams.get('id');
    this.store.select('cocktails').subscribe((cocktails: Cocktail[]) => {
      const cocktailFound = cocktails.find(({ id }) => id === parseInt(currentId));

      if (!cocktailFound) {
        this.router.navigate([], { queryParams: { id: 1 } });
      } else {
        this.cocktail = cocktailFound;
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlParams = new URLSearchParams(window.location.search);
        const currentId = urlParams.get('id');
        this.store.select('cocktails').subscribe((cocktails: Cocktail[]) => {
          this.cocktail = cocktails.find(({ id }) => id === parseInt(currentId));
        });
      }
    });
  }
}
