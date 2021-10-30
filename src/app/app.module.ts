import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movies/movie-list/movie-item/movie-item.component';
import { MovieCastComponent } from './components/movies/movie-list/movie-cast/movie-cast.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieCastComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
