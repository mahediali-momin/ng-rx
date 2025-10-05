import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  imports: [],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css'
})
export class CounterButton {

  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  decrement() {
    this.counter--;
    this.counterChange.emit(this.counter);
  }

  reset() {
    this.counter = 0;
    this.counterChange.emit(this.counter);
  }
}
