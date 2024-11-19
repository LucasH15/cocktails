import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';
import datas from '../datas.json';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss'
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  cocktails: Cocktail[] = datas;
  currentCocktailIndex: number;
  currentCocktail: Cocktail;
  subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService, private router: Router) {
  }

  ngOnInit() {
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      })
    );
    this.subscription.add(
      this.cocktailService.selectedCocktail$.subscribe((selectedCocktail: Cocktail) => {
        this.currentCocktail = selectedCocktail;
        this.currentCocktailIndex = selectedCocktail.id;
        this.router.navigate([], { queryParams: { id: this.currentCocktailIndex } });
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public showCocktail(index?: number) {
    this.cocktailService.selectCocktail(index);
  }
}
