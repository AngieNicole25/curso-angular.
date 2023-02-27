import { Component } from '@angular/core';
import { MovieSeries } from 'src/app/shared/interfaces/MoviesSeries.interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

movies_series : MovieSeries [] =[
{
  id: 1,
  name: 'Black Widow',
  description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.',
  image: '/assets/imagenes/img/1-black-widow.svg',
  rating: 0,
  category: 'Peliculas'
},
{
  id: 2,
  name: 'Shang Chi',
  description: 'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
  image: '/assets/imagenes/img/2-shang-chi.svg',
  rating: 0,
  category: 'Peliculas'
},
{
  id: 3,
  name: 'Loki',
  description: 'After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant” or help fix the timeline and stop a greater threat.',
  image: '/assets/imagenes/img/3-loki.svg',
  rating: 0,
  category: 'Peliculas'
},
{
  id: 4,
  name: 'How I Met Your Mother',
  description: 'A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.',
  image: '/assets/imagenes/img/4-how-i-met-your-mother.svg',
  rating: 0,
  category: 'Series'
},
{
  id: 5,
  name: 'Money Heist',
  description: 'To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.',
  image: '/assets/imagenes/img/5-money-heist.svg',
  rating: 0,
  category: 'Peliculas'
},
{
  id: 6,
  name: 'Friends',
  description: 'Six young people from New York City, on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.',
  image: '/assets/imagenes/img/6-friends.svg',
  rating: 0,
  category: 'Series'
},
{
  id: 7,
  name: 'The Big Bang Theory',
  description: 'The sitcom is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldons equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Pennys social skills and common sense.',
  image: '/assets/imagenes/img/7-the-big-bang-theory.svg',
  rating: 0,
  category: 'Series'
},
{
  id: 8,
  name: 'Two And a Half Men',
  description: 'A hedonistic jingle writers free-wheeling life comes to an abrupt halt when his brother and 10-year-old nephew move into his beach-front house.',
  image: '/assets/imagenes/img/8-two-and-a-half-men.svg',
  rating: 0,
  category: 'Series'
},

]

  selected: string = 'Todos';

  paraBuscar: string = ''; 
  

  cambiarCategoria(value: string) {
    console.log('Viejo valor del selected', this.selected);
    this.selected = value;
    console.log('Nuevo valor del selected', this.selected);
  }

  buscar(value: string) {
    console.log(value);
  } 
}
