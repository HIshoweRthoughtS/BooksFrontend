import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { nodeHeadersInterceptor } from './shared/interceptors/node-headers.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([nodeHeadersInterceptor]))
    ,provideZoneChangeDetection({ eventCoalescing: true })
    ,provideRouter(routes)
  ]
};
