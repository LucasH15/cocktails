import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailAddComponent } from './cocktail-container/cocktail-add/cocktail-add.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { cocktailReducer } from './shared/reducers/cocktail.reducer';
import { themeReducer } from './shared/reducers/theme.reducer';
import { AppState } from './app.state';

const APP_ROUTES: Route[] = [
  { path: '', component: CocktailContainerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailAddComponent,
    CocktailContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    StoreModule.forRoot<AppState>({ cocktails: cocktailReducer, theme: themeReducer })
  ],
  bootstrap: [AppComponent],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync()
  ]
})
export class AppModule {
}
