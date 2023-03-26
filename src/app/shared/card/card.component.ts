import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() nombre : string = '';
  @Input() imagen : string = '';
  @Input() vote_average: number = 0;
  @Input() conBoton: boolean = false;
  @Input() id: number = 0;
  @Output() newItemEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    console.log("imagen", "nombre", "puntuacion", this.imagen)
  }

  addNewItem() {
    this.newItemEvent.emit(this.id);
  }
}
