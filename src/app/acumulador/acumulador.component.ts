import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.scss']
})
export class AcumuladorComponent implements OnInit {

  @Input() contador: number = 0;
  @Input('acm') acumulador: number = 0;
  @Output() evtClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: number) {
    this.contador = this.contador + value;
    this.evtClick.emit(`Incremente o Decremento: ${value}`);
  }
}
