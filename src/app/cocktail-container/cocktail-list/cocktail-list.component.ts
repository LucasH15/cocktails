import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail.interface';
import datas from '../../datas.json';
import { removeAccents } from '../../utils/string';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
  @Input() currentCocktailIndex: number;
  @Input() cocktails: Cocktail[];
  @Output() private showCocktailDetails: EventEmitter<number> = new EventEmitter();

  active: boolean = false;

  public showCocktail(cocktailIndex?: number) {
    this.showCocktailDetails.emit(cocktailIndex);
  }

  updateCocktails(search: string) {
    this.showCocktail();
    this.cocktails = datas.filter(({ name }) =>
      removeAccents(name.toLowerCase()).includes(removeAccents(search.toLowerCase()))
    )
  }

  public showModal() {
    this.active = !this.active;
  }
}
