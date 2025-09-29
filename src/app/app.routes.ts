import { Routes } from '@angular/router';
import { Counter } from '../non-ng-rx/counter/counter';
import { Counter as ngrxCounter } from '../ng-rx/counter/counter';

export const routes: Routes = [
    {
        path: 'simple-counter',
        component: Counter
    },
    {
        path: 'ngrx',
        component: ngrxCounter
    }
];
