import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';
import datas from '../datas.json';
import { removeAccents } from '../utils/string';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss'
})
export class CocktailContainerComponent implements OnInit {
  cocktails: Cocktail[] = datas;
  currentCocktail: Cocktail;

  ngOnInit() {
    this.currentCocktail = this.cocktails[0];
  }

  public showCocktail(cocktail?: Cocktail) {
    this.currentCocktail = cocktail;
  }
}
