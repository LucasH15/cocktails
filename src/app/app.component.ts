import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  theme = signal('light');

  ngOnInit() {
    document.body.className = this.theme();
  }

  constructor() {
    effect(() => {
      document.body.className = this.theme();
    });
  }

  toggleDarkTheme() {
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
  }
}
