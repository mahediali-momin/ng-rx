import { Component, Input, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from '../../../../public/store/counter/counter.selectors';
import { CounterState } from '../../../../public/store/counter/counter.state';

@Component({
  selector: 'app-counter-output',
  imports: [],
  templateUrl: './counter-output.html',
  styleUrl: './counter-output.css'
})
export class CounterOutput {
  // counter: any = signal(0);
  counter: any = 0;

  constructor(
    private store: Store<{ counter: CounterState }>
  ) {

    /* approach 1 */
    // this.counter = this.store.selectSignal(state => {
    //   return state.counter.counter
    // });


    /* approach 2 */
    this.store.select(getCounter).subscribe((count) => {

      /* we can write as below line too */
      // this.store.select(state => state.counter.counter).subscribe((count) => {
      this.counter = count
    })
  }
}
