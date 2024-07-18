import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';
import datas from '../datas.json';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
  @Input() currentCocktail: Cocktail;
  @Output() private showCocktailDetails: EventEmitter<Cocktail> = new EventEmitter();

  active: boolean = false;
  cocktails: Cocktail[] = datas;

  updateCocktails(search: string) {
    this.showCocktail();
    this.cocktails = datas.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    )
  }

  public showCocktail(cocktail?: Cocktail) {
    this.showCocktailDetails.emit(cocktail);
  }

  public showModal() {
    this.active = !this.active;
  }
}
