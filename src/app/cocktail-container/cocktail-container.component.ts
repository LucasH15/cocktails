import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';
import datas from '../datas.json';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss'
})
export class CocktailContainerComponent implements OnInit {
  cocktails: Cocktail[] = datas;
  currentCocktailIndex: number;
  currentCocktail: Cocktail;

  ngOnInit() {
    this.currentCocktailIndex = 1;
    this.currentCocktail = this.cocktails.find(({ id }) => id === this.currentCocktailIndex);
  }

  public showCocktail(cocktailIndex?: number) {
    this.currentCocktailIndex = cocktailIndex;
    this.currentCocktail = this.cocktails.find(({ id }) => id === this.currentCocktailIndex);
  }
}
