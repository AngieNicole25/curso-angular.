import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.component.html',
  styleUrls: ['./agregar-item.component.css'],
  providers: [MoviesService, FirestoreService]
})
export class AgregarItemComponent {

  movies_series: any[] = [];

  constructor(
    private _moviesService: MoviesService,
    private _firestoreService: FirestoreService
  ){}

  ngOnInit() : void {
    this.getTrendingAll();
  }

  getTrendingAll() {
    this._moviesService.getTrending().subscribe({
      next: (data) => {
        this.movies_series = data.results;
        console.log (data)
        for (const element of this.movies_series) {
          element.poster_path = 'https://image.tmdb.org/t/p/w500' + element.poster_path;
          element.vote_average = '' + element.vote_average;
        }
       
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  addItem(newItem: number) {
    console.log('peliculas para agregar', newItem);
    let peliculaParaAgregar = this.movies_series.find(movie => movie.id == newItem);
    console.log('Pelicula encontrada', peliculaParaAgregar);

    this._firestoreService.create(peliculaParaAgregar)
  }

  deleteItem(newItem: number) {
    console.log('Eliminar peliculas', newItem);
    let eliminarPeliculas = this.movies_series.find(movie => movie.id == newItem);
    console.log('Pelicula guardada', eliminarPeliculas);

    this._firestoreService.delete(newItem);
  }
  
  obtenerPeliculasGuardadas() {
    this._firestoreService.getAll().subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }
}
