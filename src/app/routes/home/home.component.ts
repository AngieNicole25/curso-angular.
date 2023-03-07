import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Trending } from 'src/app/shared/interfaces/Trending.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MoviesService]
})

  export class HomeComponent {
    movies_series : any = {};
  
    selected: string = 'Todos';
  
    paraBuscar: string = ''; 

    constructor(
      private _moviesService: MoviesService
    ) {
    }
  
    ngOnInit() :void {
      this.getTrendingAll();
    }
    
  getTrendingAll() {
    this._moviesService.getTrending().subscribe({
      next: (data) => {
        this.movies_series = data;
        for (const element of this.movies_series.results) {
          element.poster_path = 'https://image.tmdb.org/t/p/w500' + element.poster_path;
          element.vote_average = '' + element.vote_average;
        }
        console.log(this.movies_series)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  
  getMovies() {
    this._moviesService.getMovies().subscribe({
      next: (data) => {
        this.movies_series = data;
        for (const element of this.movies_series.results) {
          element.poster_path = 'https://api.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  
  getTv() {
    this._moviesService.getSeries().subscribe({
      next: (data) => {
        this.movies_series = data;
        for (const element of this.movies_series.results) {
          element.poster_path = 'https://api.themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  
    cambiarCategoria(value: string) {
      this.selected = value;
      if (value == 'tv') {
        this.getTv();
      } else if (value == 'movie') {
        this.getMovies();
      } else {
        this.getTrendingAll()
      }
    }
  
    buscar(value: string) {
      console.log(value);
    } 
  }