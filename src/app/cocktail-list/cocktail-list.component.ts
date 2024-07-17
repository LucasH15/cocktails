import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
  @Input() currentCocktail: Cocktail;
  @Output() private showCocktailDetails: EventEmitter<Cocktail> = new EventEmitter();

  cocktails: Cocktail[] = [{
    name: 'Mojito Royal',
    image: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-mojito-1.jpg.webp',
    description: 'Contrairement aux idées reçues, l’étymologie du mot Mojito ne provient pas de l’espagnol mais puise ses sources du mot africain "mojo" qui signifie « jeter un petit sort ». Laissez-vous donc ensorceler par la magie des bulles du Mojito Royal et découvrez sans plus attendre l’étendue de ses mystérieux pouvoirs …'
  }, {
    name: 'Piña Colada',
    image: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-pina-colada-6.jpg.webp',
    description: 'Le cocktail Piña Colada puise ses origines à Puerto Rico où il a été inventé par un barman de l’hôtel Caribe Hilton en 1954. Décrétée 30 ans plus tard boisson nationale, désormais reconnu à l’échelle internationale, cet élixir doux et fruité concentre dans le verre toutes les saveurs ensoleillées des Caraïbes. Le goût de l’ananas prédomine, mais quoi de plus normal lorsque l’on sait que Piña Colada se traduit littéralement par « ananas pressé » en espagnol !'
  }, {
    name: 'Daïquiri',
    image: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-daiquiri-1.jpg.webp',
    description: 'Au début du 20e siècle, l\'ingénieur Pagliuchi visite une mine de fer appelée Daïquiri, située à l\'est de Cuba, non loin de Santiago de Cuba, guidé par l\'ingénieur américain Jennings Cox. Ce dernier, heureux de proposer un verre à son collègue après cette dure journée de travail, s\'aperçoit que sa réserve ne contient que du rhum, des citrons et du sucre de canne. Qu\'à cela ne tienne, il verse ces ingrédients sur de la glace et c\'est ainsi qu\'ils se délectent de ce cocktail tout aussi rafraîchissant qu\'original. Ainsi naquit le Daïquiri qui devint l\'une des boissons préférées de l\'écrivain Ernest Hemingway qui y ajoutait un trait de marasquin.'
  }];

  public showCocktail(cocktail: Cocktail) {
    this.showCocktailDetails.emit(cocktail);
  }
}
