import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  imports: [],
  templateUrl: './counter-output.html',
  styleUrl: './counter-output.css'
})
export class CounterOutput {
  @Input() counter!: number;
}
