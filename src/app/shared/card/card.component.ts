import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() nombre : string = '';
  @Input() imagen : string = '';
  @Input() vote_average: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log("imagen", "nombre", "puntuacion", this.imagen)
  }

}
