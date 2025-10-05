import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { counterReducer } from '../../public/store/counter/counter.reducer';
import { Counter as ngrxCounter } from './ng-rx/counter/counter';
import { Counter } from './non-ng-rx/counter/counter';

export const routes: Routes = [
    {
        path: 'simple-counter',
        component: Counter
    },
    {
        path: 'ngrx',
        component: ngrxCounter,
        providers: [
            provideState('counter', counterReducer)
        ]
    },
    {
        path: 'post',
        loadChildren: () => import('./post/post.routes').then(m => m.PostRoutingModule)
    }
];
