import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterState } from '../../../public/store/counter/counter.state';
import { addValue, decrement, increment, reset, setName } from '../../../public/store/counter/counter.action';
import { getName } from '../../../public/store/counter/counter.selectors';

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

    // })


    /* approach 2 */
    this.store.select(getName).subscribe((name) => {
      this.name = name
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
