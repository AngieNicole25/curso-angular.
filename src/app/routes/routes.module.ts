import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    MoviesComponent
  ],
})
export class RoutesModule { }
