import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Store } from '@ngrx/store';
import { addValue, decrement, increment, reset } from '../counter.action';
import { CounterState } from '../counter.state';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter-button',
  imports: [CommonModule, FormsModule],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css'
})
export class CounterButton {

  counterInput: number = 0;
  constructor(private store: Store<{ counter: CounterState }>) {

  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())

  }

  reset() {
    this.store.dispatch(reset())
  }

  addValue() {
    this.store.dispatch(addValue(+this.counterInput))
  }
}
