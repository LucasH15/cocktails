import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    name: 'Mojito Royal',
    image: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-mojito-1.jpg.webp',
    description: 'Contrairement aux idées reçues, l’étymologie du mot Mojito ne provient pas de l’espagnol mais puise ses sources du mot africain "mojo" qui signifie « jeter un petit sort ». Laissez-vous donc ensorceler par la magie des bulles du Mojito Royal et découvrez sans plus attendre l’étendue de ses mystérieux pouvoirs …'
  };
}
