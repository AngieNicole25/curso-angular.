import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { MoviesComponent } from './routes/movies/movies.component';
import { SeriesComponent } from './routes/series/series.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'ingresar',
    component: IngresarComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    redirectTo: 'home',
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
