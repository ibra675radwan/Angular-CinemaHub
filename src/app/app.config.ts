import {ApplicationConfig, isDevMode, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { register } from 'swiper/element/bundle';
import {provideAnimations} from "@angular/platform-browser/animations";
import { API_BASE_URL, APIClient } from './core/services/apiClient';

register();

export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()), provideHttpClient(withFetch()), provideAnimations(), provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    }),
  APIClient,
  {
    provide: API_BASE_URL,
    useValue: "https://localhost:7081"
  },
provideHttpClient()]
};
