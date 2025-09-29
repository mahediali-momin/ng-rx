import { Component } from '@angular/core';
import { CounterOutput } from "../counter-output/counter-output";
import { CounterButton } from "../counter-button/counter-button";

@Component({
  selector: 'app-counter',
  imports: [CounterOutput, CounterButton],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {

  counter = 0
}
