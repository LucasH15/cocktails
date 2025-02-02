import { Component, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { UpdateTheme } from '../shared/actions/theme.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  theme: WritableSignal<string> = signal('');

  constructor(
    private store: Store<AppState>
  ) {
    effect(() => {
      document.body.className = this.theme();
    });
  }

  ngOnInit() {
    this.store.select('theme').subscribe(theme => {
      this.theme.update(() => theme);
    });
    document.body.className = this.theme();
  }

  toggleDarkTheme() {
    this.store.dispatch(UpdateTheme({ theme: this.theme() === 'light' ? 'dark' : 'light' }));
  }
}
