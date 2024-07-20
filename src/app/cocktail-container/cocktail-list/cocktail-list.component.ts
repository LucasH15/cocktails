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
  @Input() currentCocktail: Cocktail;
  @Input() cocktails: Cocktail[];
  @Output() private showCocktailDetails: EventEmitter<Cocktail> = new EventEmitter();

  active: boolean = false;

  public showCocktail(cocktail?: Cocktail) {
    this.showCocktailDetails.emit(cocktail);
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
