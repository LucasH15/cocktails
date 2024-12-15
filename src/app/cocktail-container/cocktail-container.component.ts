import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrl: './cocktail-container.component.scss'
})
export class CocktailContainerComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if(!id) {
      this.router.navigate([], { queryParams: { id: 1 } });
    }
  }
}
