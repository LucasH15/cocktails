import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';
import { AddCocktail } from '../../shared/actions/cocktail.actions';
// import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-add',
  templateUrl: './cocktail-add.component.html',
  styleUrl: './cocktail-add.component.scss'
})
export class CocktailAddComponent implements OnInit {
  @Input({ required: true }) active: boolean;
  @Output() private showModalEvent: EventEmitter<boolean> = new EventEmitter();
  cocktailForm: FormGroup;

  get name() {
    return this.cocktailForm.get('name');
  }

  get description() {
    return this.cocktailForm.get('description');
  }

  get image() {
    return this.cocktailForm.get('image');
  }

  constructor(
    private fb: FormBuilder,
    // private cocktailService: CocktailService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.cocktailForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  showModal() {
    this.showModalEvent.emit(this.active);
  }

  onSubmit() {
    if (this.cocktailForm.valid) {
      // this.cocktailService.addCocktail(this.cocktailForm.value);
      this.store.dispatch(AddCocktail({ cocktail: this.cocktailForm.value }));
      this.active = false;
      this.showModal();
    }
  }
}
