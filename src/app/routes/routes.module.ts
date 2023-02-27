import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    IngresarComponent,
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    IngresarComponent,
  ],
})
export class RoutesModule { }
