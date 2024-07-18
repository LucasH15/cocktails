import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cocktail-add',
  templateUrl: './cocktail-add.component.html',
  styleUrl: './cocktail-add.component.scss'
})
export class CocktailAddComponent {
  @Input({ required: true }) active: boolean;
  @Output() private showModalEvent: EventEmitter<boolean> = new EventEmitter();

  showModal() {
    this.showModalEvent.emit(this.active);
  }
}
