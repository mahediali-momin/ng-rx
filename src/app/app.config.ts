import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { appStore } from '../../public/store/app.store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { postReducer } from '../../public/store/post/post.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore({}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
