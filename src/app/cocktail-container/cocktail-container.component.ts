import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss'
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  cocktails: Cocktail[] = [];
  currentCocktailIndex: number;
  currentCocktail: Cocktail;
  subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService, private router: Router) {
  }

  ngOnInit() {
    this.cocktailService.getCocktails().subscribe(cocktails => {
      this.cocktails = cocktails;

      this.subscription.add(
        this.cocktailService.selectedCocktail$.subscribe((selectedCocktail: Cocktail) => {
          this.currentCocktail = selectedCocktail;
          this.currentCocktailIndex = selectedCocktail.id;
          this.router.navigate([], { queryParams: { id: this.currentCocktailIndex } });
        })
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public showCocktail(index?: number) {
    this.cocktailService.selectCocktail(index);
  }
}
