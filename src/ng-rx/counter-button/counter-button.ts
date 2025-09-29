import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Store } from '@ngrx/store';
import { addValue, decrement, increment, reset, setName } from '../counter.action';
import { CounterState } from '../counter.state';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { getName } from '../counter.selectors';

@Component({
  selector: 'app-counter-button',
  imports: [CommonModule, FormsModule],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css'
})
export class CounterButton {

  name: string
  counterInput: number = 0;
  constructor(private store: Store<{ counter: CounterState }>) {

    /* approach 1 */
    // this.store.select('counter').subscribe((state) => {
    //   this.name = state.name
    //   console.log('name update');

    // })


    /* approach 2 */
    this.store.select(getName).subscribe((name) => {
      this.name = name
      console.log('name update');
    })
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

  setName() {
    this.store.dispatch(setName())
  }
}
