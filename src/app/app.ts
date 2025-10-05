import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Loader } from "./shared/component/loader/loader";
import { Store } from '@ngrx/store';
import { loadingState } from '../../public/store/shared/loader.state';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterModule, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ng-Rx');
  loader$: any = signal(false);

  constructor(
    private store: Store<{ loading: loadingState }>
  ) {

    this.loader$ = this.store.selectSignal((state) => {
      return state.loading.loading
    });
  }
}
