import { Component, Input, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter.state';

@Component({
  selector: 'app-counter-output',
  imports: [],
  templateUrl: './counter-output.html',
  styleUrl: './counter-output.css'
})
export class CounterOutput {
  counter: any = signal(0);

  constructor(
    private store: Store<{ counter: CounterState }>
  ) {
    this.counter = this.store.selectSignal(state => state.counter.counter);
  }
}
